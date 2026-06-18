#!/usr/bin/env python3
import http.server
import subprocess
import sys
import os

PORT = 6419
FILE = os.path.join(os.path.dirname(__file__), "stack-decision.md")

def md_to_html(path):
    with open(path, "r", encoding="utf-8") as f:
        raw = f.read()

    # Minimal markdown-to-html via python3 -c (no deps)
    # Use GitHub's markdown renderer via curl if available, else fallback
    lines = raw.split("\n")
    html_lines = []
    in_table = False
    in_code = False

    for line in lines:
        if line.startswith("```"):
            if not in_code:
                html_lines.append("<pre><code>")
                in_code = True
            else:
                html_lines.append("</code></pre>")
                in_code = False
            continue
        if in_code:
            html_lines.append(line.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))
            continue
        if line.startswith("# "):
            html_lines.append(f"<h1>{line[2:]}</h1>")
        elif line.startswith("## "):
            html_lines.append(f"<h2>{line[3:]}</h2>")
        elif line.startswith("### "):
            html_lines.append(f"<h3>{line[4:]}</h3>")
        elif line.startswith("| "):
            if not in_table:
                html_lines.append("<table>")
                in_table = True
            if set(line.replace("|", "").replace("-", "").replace(" ", "")) == set():
                html_lines.append("</thead><tbody>")
                continue
            cols = [c.strip() for c in line.strip("|").split("|")]
            tag = "th" if not "<tbody>" in "\n".join(html_lines[-2:]) else "td"
            html_lines.append("<tr>" + "".join(f"<{tag}>{c}</{tag}>" for c in cols) + "</tr>")
        elif line.startswith("- [ ] ") or line.startswith("- [x] "):
            checked = "checked" if line.startswith("- [x]") else ""
            text = line[6:]
            html_lines.append(f'<li><input type="checkbox" {checked} disabled> {text}</li>')
        elif line.startswith("- "):
            html_lines.append(f"<li>{line[2:]}</li>")
        elif line.startswith("> "):
            html_lines.append(f"<blockquote>{line[2:]}</blockquote>")
        elif line.strip() == "---":
            if in_table:
                html_lines.append("</tbody></table>")
                in_table = False
            html_lines.append("<hr>")
        elif line.strip() == "":
            if in_table:
                html_lines.append("</tbody></table>")
                in_table = False
            html_lines.append("")
        else:
            # inline bold/italic/code
            import re
            l = line
            l = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', l)
            l = re.sub(r'`(.+?)`', r'<code>\1</code>', l)
            html_lines.append(f"<p>{l}</p>")

    if in_table:
        html_lines.append("</tbody></table>")

    body = "\n".join(html_lines)
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>stack-decision.md — Morá Arquitetura</title>
<style>
  *, *::before, *::after {{ box-sizing: border-box; }}
  body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 16px; line-height: 1.6; color: #1a1815; background: #f7f4ef; margin: 0; padding: 0; }}
  .wrapper {{ max-width: 860px; margin: 0 auto; padding: 48px 32px; }}
  h1 {{ font-size: 2rem; font-weight: 600; border-bottom: 0.5px solid #d4cfc8; padding-bottom: 12px; margin-top: 0; }}
  h2 {{ font-size: 1.4rem; font-weight: 600; margin-top: 40px; border-bottom: 0.5px solid #d4cfc8; padding-bottom: 8px; }}
  h3 {{ font-size: 1.1rem; font-weight: 600; margin-top: 24px; }}
  p {{ margin: 12px 0; }}
  blockquote {{ border-left: 3px solid #8b7355; margin: 16px 0; padding: 8px 16px; background: #ede9e2; border-radius: 0 4px 4px 0; font-style: italic; }}
  table {{ width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 0.9rem; }}
  th {{ background: #ede9e2; text-align: left; padding: 10px 12px; border: 0.5px solid #d4cfc8; font-weight: 600; }}
  td {{ padding: 10px 12px; border: 0.5px solid #d4cfc8; vertical-align: top; }}
  tr:nth-child(even) td {{ background: #faf8f5; }}
  code {{ background: #ede9e2; padding: 2px 6px; border-radius: 3px; font-size: 0.88em; font-family: 'SF Mono', 'Menlo', monospace; }}
  pre {{ background: #1a1815; color: #f7f4ef; padding: 20px; border-radius: 4px; overflow-x: auto; }}
  pre code {{ background: none; padding: 0; color: inherit; }}
  hr {{ border: none; border-top: 0.5px solid #d4cfc8; margin: 32px 0; }}
  li {{ margin: 6px 0; }}
  ul {{ padding-left: 20px; }}
  input[type=checkbox] {{ margin-right: 8px; accent-color: #8b7355; }}
  strong {{ font-weight: 600; }}
</style>
</head>
<body>
<div class="wrapper">
{body}
</div>
</body>
</html>"""

class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            content = md_to_html(FILE).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(content)))
            self.end_headers()
            self.wfile.write(content)
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(str(e).encode())

    def log_message(self, format, *args):
        pass  # silenciar logs

if __name__ == "__main__":
    with http.server.HTTPServer(("", PORT), Handler) as server:
        print(f"http://localhost:{PORT}", flush=True)
        server.serve_forever()

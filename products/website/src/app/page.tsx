export default function Home() {
  return (
    <main style={{ backgroundColor: "#FBFAF4", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", position: "sticky", top: 0, backgroundColor: "rgba(251,250,244,0.95)", backdropFilter: "blur(8px)", zIndex: 100, borderBottom: "1px solid #E4E3D4" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="18" height="19" viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0401 28.9803C21.3356 28.9881 21.5419 28.9933 21.7914 29.1805C23.0335 30.1134 24.1567 31.2278 25.3373 32.2405C25.7741 32.6151 26.2225 33.0206 26.5917 33.4581C26.66 35.9792 26.5896 38.5235 26.616 41.046C26.6248 41.8744 26.6207 42.7177 26.5896 43.5447C25.9858 44.4387 25.1514 44.2396 24.1919 44.2451C23.2932 44.2506 22.3912 44.2328 21.4925 44.2287C20.2808 44.2253 19.0686 44.2499 17.8572 44.2492C16.9745 44.2485 16.4986 44.3203 15.9274 43.5659C15.8692 42.3285 15.9055 40.8094 15.9053 39.5529C15.8965 37.528 15.9022 35.5032 15.922 33.4784C16.357 32.899 20.4288 29.2695 21.0401 28.9803Z" fill="#091717"/>
            <path d="M8.32112 23.4454C8.71317 23.4078 9.09664 23.4371 9.3304 23.8131C10.855 26.2588 12.2167 28.8177 13.6565 31.3168C14.4457 32.6866 13.0695 33.2021 12.0457 33.769C9.91997 34.946 7.82466 36.3428 5.67261 37.4506C5.31531 37.4779 4.91487 37.5112 4.67679 37.1703C4.15409 36.4218 3.71463 35.5967 3.26057 34.8025L0.509352 29.9759C0.0604966 29.1748 -0.325674 28.471 0.671099 27.9007C3.1895 26.4598 5.75639 24.7817 8.32112 23.4454Z" fill="#091717"/>
            <path d="M33.6551 23.438C34.735 23.3437 40.2493 27.1101 41.6416 27.7711C42.6288 28.2395 42.6728 29.0302 42.0446 29.903C41.1182 31.1893 38.4716 36.8723 37.4276 37.4612C36.205 37.5249 30.7461 33.7525 29.3471 33.0934C29.1632 33.0069 28.7379 32.6182 28.6006 32.4292C28.5688 32.2352 28.604 32.0729 28.6567 31.8871C28.8893 31.071 32.5103 24.7349 33.1412 23.8656C33.2839 23.6689 33.4482 23.5556 33.6551 23.438Z" fill="#091717"/>
            <path d="M36.9719 6.74792C37.7738 6.76277 37.9442 7.16297 38.3168 7.81448C39.6428 10.1318 40.981 12.4424 42.2806 14.7746C42.6809 15.493 42.4267 15.9787 41.789 16.3713C39.8653 17.5633 37.8827 18.6573 35.9359 19.8105C35.3361 20.1647 34.7019 20.571 34.0642 20.8315C33.7261 20.8168 33.3671 20.7469 33.1791 20.4389C31.7591 18.1146 30.4567 15.7031 29.0922 13.3445C28.5878 12.4723 28.2294 11.8429 29.2633 11.2037C31.1911 10.0112 33.1804 8.90689 35.1313 7.75114C35.7222 7.40217 36.3423 7.00819 36.9719 6.74792Z" fill="#091717"/>
            <path d="M5.1649 6.74727C5.79011 6.74015 6.54075 7.25151 7.08312 7.57401C9.20399 8.83735 11.3717 10.0296 13.4614 11.3441C14.3575 11.8872 13.713 12.8587 13.3159 13.5324C11.9646 15.8256 10.7323 18.2208 9.2992 20.4605C9.19243 20.6273 8.94447 20.7442 8.76968 20.8266C7.75519 20.8448 2.11602 17.047 0.823619 16.4321C0.592632 16.3223 0.142424 15.8586 0.00022119 15.6168C-0.00173976 15.4954 0.00854134 15.3467 0.0633128 15.2354C1.41874 12.4794 3.04964 9.7946 4.62544 7.15759C4.74012 6.96573 4.9728 6.84015 5.1649 6.74727Z" fill="#091717"/>
            <path d="M16.5716 0.060472C17.9562 -0.0696925 19.9041 0.0569835 21.3599 0.0171065C22.7739 0.0346168 24.1966 -0.0302244 25.6071 0.0568483C26.1298 0.0890645 26.5903 0.433387 26.5943 0.986877C26.6167 4.0124 26.6633 7.05762 26.5741 10.0796C26.5639 10.4096 26.1825 10.6753 25.9378 10.8305C25.574 10.8621 25.1811 10.8576 24.8126 10.8547C22.1247 10.8337 19.4251 10.9198 16.7403 10.8274C16.3517 10.8141 16.1406 10.4956 15.9267 10.2148C15.9 9.76789 15.9055 9.28956 15.9094 8.83963C15.9334 6.17464 15.8443 3.49838 15.9345 0.836946C15.946 0.497547 16.3212 0.235917 16.5716 0.060472Z" fill="#091717"/>
          </svg>
          <span style={{ fontSize: "14px", fontWeight: 300, color: "#091717" }}>builders</span>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          {["Segmentos +", "Serviços +", "Manifesto", "Cases", "Sobre"].map((item) => (
            <a key={item} href="#" style={{ fontSize: "13px", color: "#2E5E5A", textDecoration: "none" }}>{item}</a>
          ))}
        </div>
        <a href="#" style={{ fontSize: "13px", padding: "7px 16px", borderRadius: "6px", border: "1px solid #20808D", color: "#20808D", textDecoration: "none" }}>Entrar</a>
      </nav>

      {/* HERO — texto lado a lado + imagem full com app emergindo */}
      <section style={{ padding: "64px 48px 0", maxWidth: "1100px", margin: "0 auto" }}>
        {/* Texto lado a lado */}
        <div style={{ display: "flex", gap: "48px", alignItems: "flex-start", marginBottom: "48px" }}>
          <h1 style={{ flex: 1, fontSize: "40px", fontWeight: 400, lineHeight: 1.15, color: "#091717", letterSpacing: "-0.5px", margin: 0 }}>
            Soluções em IA para<br />consolidar sua presença digital
          </h1>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
            <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#2E5E5A", margin: 0 }}>
              Sites otimizados, automações inteligentes e um chat de IA sobre o seu negócio, tudo em uma única plataforma.
            </p>
            <a href="#" style={{ display: "inline-block", fontSize: "13px", fontWeight: 500, padding: "10px 20px", borderRadius: "6px", backgroundColor: "#20808D", color: "#fff", textDecoration: "none" }}>
              Agendar uma conversa
            </a>
          </div>
        </div>
      </section>

      {/* Imagem full-width com app emergindo — igual Hiver */}
      <div style={{ position: "relative", margin: "0 48px" }}>
        {/* Imagem grande */}
        <div style={{ borderRadius: "16px", overflow: "hidden", height: "680px" }}>
          <img
            src="/Gemini_Generated_Image_s17nins17nins17n 1.jpg"
            alt="Rio de Janeiro"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%", display: "block" }}
          />
        </div>

        {/* App menor, emergindo dos morros */}
        <div style={{
          position: "absolute",
          top: "48px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "65%",
          bottom: "-180px",
          borderRadius: "10px 10px 0 0",
          overflow: "hidden",
          backgroundColor: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 80px rgba(9,23,23,0.3)",
          border: "1px solid rgba(228,227,212,0.6)",
          borderBottom: "none",
        }}>
          {/* Barra de abas */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "8px 14px", borderBottom: "1px solid #E4E3D4", backgroundColor: "rgba(255,255,255,0.99)", overflowX: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
              <svg width="11" height="11" viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0401 28.9803C21.3356 28.9881 21.5419 28.9933 21.7914 29.1805C23.0335 30.1134 24.1567 31.2278 25.3373 32.2405C25.7741 32.6151 26.2225 33.0206 26.5917 33.4581C26.66 35.9792 26.5896 38.5235 26.616 41.046C26.6248 41.8744 26.6207 42.7177 26.5896 43.5447C25.9858 44.4387 25.1514 44.2396 24.1919 44.2451C23.2932 44.2506 22.3912 44.2328 21.4925 44.2287C20.2808 44.2253 19.0686 44.2499 17.8572 44.2492C16.9745 44.2485 16.4986 44.3203 15.9274 43.5659C15.8692 42.3285 15.9055 40.8094 15.9053 39.5529C15.8965 37.528 15.9022 35.5032 15.922 33.4784C16.357 32.899 20.4288 29.2695 21.0401 28.9803Z" fill="#20808D"/>
                <path d="M8.32112 23.4454C8.71317 23.4078 9.09664 23.4371 9.3304 23.8131C10.855 26.2588 12.2167 28.8177 13.6565 31.3168C14.4457 32.6866 13.0695 33.2021 12.0457 33.769C9.91997 34.946 7.82466 36.3428 5.67261 37.4506C5.31531 37.4779 4.91487 37.5112 4.67679 37.1703C4.15409 36.4218 3.71463 35.5967 3.26057 34.8025L0.509352 29.9759C0.0604966 29.1748 -0.325674 28.471 0.671099 27.9007C3.1895 26.4598 5.75639 24.7817 8.32112 23.4454Z" fill="#20808D"/>
                <path d="M33.6551 23.438C34.735 23.3437 40.2493 27.1101 41.6416 27.7711C42.6288 28.2395 42.6728 29.0302 42.0446 29.903C41.1182 31.1893 38.4716 36.8723 37.4276 37.4612C36.205 37.5249 30.7461 33.7525 29.3471 33.0934C29.1632 33.0069 28.7379 32.6182 28.6006 32.4292C28.5688 32.2352 28.604 32.0729 28.6567 31.8871C28.8893 31.071 32.5103 24.7349 33.1412 23.8656C33.2839 23.6689 33.4482 23.5556 33.6551 23.438Z" fill="#20808D"/>
                <path d="M36.9719 6.74792C37.7738 6.76277 37.9442 7.16297 38.3168 7.81448C39.6428 10.1318 40.981 12.4424 42.2806 14.7746C42.6809 15.493 42.4267 15.9787 41.789 16.3713C39.8653 17.5633 37.8827 18.6573 35.9359 19.8105C35.3361 20.1647 34.7019 20.571 34.0642 20.8315C33.7261 20.8168 33.3671 20.7469 33.1791 20.4389C31.7591 18.1146 30.4567 15.7031 29.0922 13.3445C28.5878 12.4723 28.2294 11.8429 29.2633 11.2037C31.1911 10.0112 33.1804 8.90689 35.1313 7.75114C35.7222 7.40217 36.3423 7.00819 36.9719 6.74792Z" fill="#20808D"/>
                <path d="M5.1649 6.74727C5.79011 6.74015 6.54075 7.25151 7.08312 7.57401C9.20399 8.83735 11.3717 10.0296 13.4614 11.3441C14.3575 11.8872 13.713 12.8587 13.3159 13.5324C11.9646 15.8256 10.7323 18.2208 9.2992 20.4605C9.19243 20.6273 8.94447 20.7442 8.76968 20.8266C7.75519 20.8448 2.11602 17.047 0.823619 16.4321C0.592632 16.3223 0.142424 15.8586 0.00022119 15.6168C-0.00173976 15.4954 0.00854134 15.3467 0.0633128 15.2354C1.41874 12.4794 3.04964 9.7946 4.62544 7.15759C4.74012 6.96573 4.9728 6.84015 5.1649 6.74727Z" fill="#20808D"/>
                <path d="M16.5716 0.060472C17.9562 -0.0696925 19.9041 0.0569835 21.3599 0.0171065C22.7739 0.0346168 24.1966 -0.0302244 25.6071 0.0568483C26.1298 0.0890645 26.5903 0.433387 26.5943 0.986877C26.6167 4.0124 26.6633 7.05762 26.5741 10.0796C26.5639 10.4096 26.1825 10.6753 25.9378 10.8305C25.574 10.8621 25.1811 10.8576 24.8126 10.8547C22.1247 10.8337 19.4251 10.9198 16.7403 10.8274C16.3517 10.8141 16.1406 10.4956 15.9267 10.2148C15.9 9.76789 15.9055 9.28956 15.9094 8.83963C15.9334 6.17464 15.8443 3.49838 15.9345 0.836946C15.946 0.497547 16.3212 0.235917 16.5716 0.060472Z" fill="#20808D"/>
              </svg>
              <span style={{ fontSize: "10px", fontWeight: 600, color: "#091717" }}>builders</span>
            </div>
            {["Artefatos de Antônio", "Reuniões", "Pagamentos", "Suporte", "Builders.IA", "Resultados"].map((item) => (
              <span key={item} style={{ fontSize: "10px", color: "#2E5E5A", cursor: "pointer", flexShrink: 0 }}>{item}</span>
            ))}
          </div>
          {/* Conteúdo do app */}
          <div style={{ display: "flex", height: "100%" }}>
            <div style={{ width: "38%", borderRight: "1px solid #E4E3D4", padding: "14px" }}>
              <span style={{ fontSize: "10px", fontWeight: 500, color: "#091717" }}>Artefatos de Antônio</span>
            </div>
            <div style={{ width: "62%", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "11px", fontWeight: 500, color: "#091717" }}>Constructor</span>
              <span style={{ fontSize: "10px", color: "#2E5E5A" }}>Converse sobre qualquer aspecto da sua empresa.</span>
              <div style={{ height: "44px", borderRadius: "8px", backgroundColor: "rgba(32,128,141,0.1)" }} />
              <span style={{ fontSize: "10px", color: "#2E5E5A", textAlign: "center" }}>Como eu posso aumentar o faturamento da minha empresa?</span>
              <div style={{ height: "52px", borderRadius: "8px", backgroundColor: "rgba(32,128,141,0.08)" }} />
              <span style={{ fontSize: "10px", color: "#2E5E5A", textAlign: "center" }}>Foi super simples e objetivo!</span>
              <div style={{ marginTop: "auto", height: "28px", borderRadius: "6px", border: "1px solid #E4E3D4", backgroundColor: "#fff" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Respiro branco antes do escuro */}
      <div style={{ backgroundColor: "#FBFAF4", height: "220px" }} />

      {/* DOBRA 2 — O PROBLEMA */}
      <section style={{ backgroundColor: "#091717", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#20808D", marginBottom: "24px" }}>O problema</p>
          <div style={{ display: "flex", gap: "64px", alignItems: "flex-start" }}>
            <h2 style={{ flex: 1, fontSize: "36px", fontWeight: 400, lineHeight: 1.2, color: "#FBFAF4", letterSpacing: "-0.3px", margin: 0 }}>
              Seu negócio não precisa de mais complicação.<br />Precisa de estrutura.
            </h2>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#7AADA8", marginBottom: "32px" }}>
                Responder cliente, mandar proposta, atualizar informação, organizar atendimento. Quando o time é enxuto, tudo cai na mão de alguém que já está no limite.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Menos retrabalho no dia a dia", "Mais velocidade no atendimento", "Mais clareza na operação", "Mais tempo para vender e crescer"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#20808D", flexShrink: 0 }} />
                    <span style={{ fontSize: "14px", color: "#FBFAF4" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 3 — COMO FUNCIONA */}
      <section style={{ backgroundColor: "#FBFAF4", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#20808D", marginBottom: "16px" }}>Como funciona</p>
          <h2 style={{ fontSize: "36px", fontWeight: 400, lineHeight: 1.2, color: "#091717", letterSpacing: "-0.3px", marginBottom: "64px" }}>
            Você paga uma vez para construir.<br />Paga todo mês para não ficar sozinho.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ backgroundColor: "#fff", border: "1px solid #E4E3D4", borderRadius: "12px", padding: "32px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "#E4F4F5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "16px" }}>🔨</span>
              </div>
              <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#20808D", marginBottom: "12px" }}>Momento 1</p>
              <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#091717", marginBottom: "12px" }}>Projeto</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#2E5E5A" }}>A gente constrói o que seu negócio precisa: site, sistema, automação, IA de atendimento ou a combinação certa disso tudo.</p>
            </div>
            <div style={{ backgroundColor: "#091717", border: "1px solid #133B39", borderRadius: "12px", padding: "32px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "#133B39", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "16px" }}>⚡</span>
              </div>
              <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#20808D", marginBottom: "12px" }}>Momento 2</p>
              <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#FBFAF4", marginBottom: "12px" }}>Plataforma mensal</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#7AADA8" }}>Depois que o projeto entra no ar, sua empresa passa a contar com a plataforma Builders — IA ativa, ajustes contínuos e suporte próximo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 4 — SERVIÇOS */}
      <section style={{ backgroundColor: "#F0EFEA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#20808D", marginBottom: "16px" }}>Serviços</p>
          <h2 style={{ fontSize: "36px", fontWeight: 400, lineHeight: 1.2, color: "#091717", letterSpacing: "-0.3px", marginBottom: "48px" }}>O que a Builders entrega</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { icon: "🌐", title: "Sites profissionais", desc: "Sites institucionais, landing pages e e-commerces otimizados para conversão e SEO." },
              { icon: "⚙️", title: "Automações com IA", desc: "Fluxos automatizados de atendimento, CRM, WhatsApp e processos internos." },
              { icon: "🤖", title: "Agentes de IA", desc: "Agentes personalizados com a identidade e conhecimento do negócio do cliente." },
              { icon: "📊", title: "Builders App", desc: "Painel do cliente para acompanhar o crescimento digital com IA integrada." }
            ].map((s) => (
              <div key={s.title} style={{ backgroundColor: "#fff", border: "1px solid #E4E3D4", borderRadius: "12px", padding: "28px" }}>
                <div style={{ fontSize: "24px", marginBottom: "16px" }}>{s.icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#091717", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#2E5E5A", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 5 — SEGMENTOS */}
      <section style={{ backgroundColor: "#FBFAF4", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#20808D", marginBottom: "16px" }}>Segmentos</p>
          <h2 style={{ fontSize: "36px", fontWeight: 400, lineHeight: 1.2, color: "#091717", letterSpacing: "-0.3px", marginBottom: "48px" }}>
            Feito para quem entende de negócio,<br />não de tecnologia
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ backgroundColor: "#133B39", borderRadius: "12px", padding: "40px", position: "relative", overflow: "hidden" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#20808D", marginBottom: "16px" }}>Arquitetura</p>
              <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#FBFAF4", lineHeight: 1.3, marginBottom: "16px" }}>Escritórios que querem aparecer como merecem</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#7AADA8", marginBottom: "24px" }}>Site de portfólio, automação de propostas e um agente que atende o primeiro contato enquanto você foca no projeto.</p>
              <a href="#" style={{ fontSize: "12px", color: "#20808D", textDecoration: "none" }}>Saiba mais →</a>
            </div>
            <div style={{ backgroundColor: "#2E5E5A", borderRadius: "12px", padding: "40px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8f06e", marginBottom: "16px" }}>Cafeterias</p>
              <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#FBFAF4", lineHeight: 1.3, marginBottom: "16px" }}>Negócios locais que vivem de movimento e reputação</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#A8D4D0", marginBottom: "24px" }}>Site bonito, cardápio online, respostas automáticas no WhatsApp e presença no Google Maps atualizada.</p>
              <a href="#" style={{ fontSize: "12px", color: "#c8f06e", textDecoration: "none" }}>Saiba mais →</a>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 6 — CASES */}
      <section style={{ backgroundColor: "#F0EFEA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#20808D", marginBottom: "16px" }}>Cases</p>
          <h2 style={{ fontSize: "36px", fontWeight: 400, lineHeight: 1.2, color: "#091717", letterSpacing: "-0.3px", marginBottom: "48px" }}>O que já construímos</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
            {[
              { tag: "Arquitetura", title: "Estúdio Morais", desc: "Site de portfólio + automação de primeiro contato. 3x mais leads qualificados em 30 dias." },
              { tag: "Cafeteria", title: "Café Origem", desc: "Site com cardápio + WhatsApp automático. Atendimento 24h sem contratar ninguém." },
              { tag: "Em breve", title: "Seu negócio aqui", desc: "Estamos buscando o próximo parceiro para construir junto." }
            ].map((c) => (
              <div key={c.title} style={{ backgroundColor: "#fff", border: "1px solid #E4E3D4", borderRadius: "12px", padding: "24px" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#20808D", marginBottom: "12px" }}>{c.tag}</p>
                <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#091717", marginBottom: "8px" }}>{c.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#2E5E5A", margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 7 — CTA FINAL */}
      <section style={{ backgroundColor: "#20808D", padding: "96px 48px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 400, lineHeight: 1.2, color: "#FBFAF4", letterSpacing: "-0.3px", marginBottom: "20px" }}>
            Você não precisa montar um time de tecnologia para crescer.
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(251,250,244,0.75)", marginBottom: "40px" }}>
            Precisa de um parceiro que resolva o digital com clareza, velocidade e continuidade.
          </p>
          <a href="#" style={{ display: "inline-block", fontSize: "14px", fontWeight: 500, padding: "14px 32px", borderRadius: "8px", backgroundColor: "#FBFAF4", color: "#091717", textDecoration: "none" }}>
            Falar com a Builders
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer style={{ backgroundColor: "#091717", padding: "48px", borderTop: "1px solid #133B39" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: 300, color: "#FBFAF4" }}>builders</span>
          <div style={{ display: "flex", gap: "32px" }}>
            {["Segmentos", "Serviços", "Manifesto", "Cases", "Sobre"].map((item) => (
              <a key={item} href="#" style={{ fontSize: "12px", color: "#7AADA8", textDecoration: "none" }}>{item}</a>
            ))}
          </div>
          <span style={{ fontSize: "12px", color: "#2E5E5A" }}>© 2026 Builders</span>
        </div>
      </footer>

    </main>
  );
}

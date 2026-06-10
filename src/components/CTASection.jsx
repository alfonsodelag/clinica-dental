const CTASection = () => (
  <section style={{ background: 'var(--iom-bg-light)', padding: '60px 0' }}>
    <div className="container">
      <div
        className="cta-section"
        style={{ margin: 0, borderRadius: '20px', padding: '70px 40px' }}
      >
        <span className="section-label" style={{ color: 'var(--iom-primary)', opacity: 0.65 }}>
          Odonto Panamá
        </span>
        <h2
          className="merriweather mb-4"
          style={{ fontSize: '2.2rem', color: 'var(--iom-primary)', lineHeight: 1.2 }}
        >
          Una forma simple de recuperar<br />tu sonrisa
        </h2>
        <p
          className="lato mb-5"
          style={{ color: 'var(--iom-primary)', fontSize: '0.95rem', maxWidth: 480, margin: '0 auto 32px', opacity: 0.8 }}
        >
          Agenda tu consulta hoy mismo. Nuestro equipo profesional en Obarrio
          está listo para ayudarte a conseguir la sonrisa que mereces.
        </p>

        <div className="d-flex flex-column align-items-center gap-3">
          <button
            className="play-btn"
            aria-label="Ver video sobre Odonto Panamá"
          >
            <i className="uil uil-play" style={{ marginLeft: '3px' }} />
          </button>
          <span
            className="lato"
            style={{ color: 'var(--iom-primary)', fontSize: '0.78rem', fontWeight: 600 }}
          >
            Ver Video
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;

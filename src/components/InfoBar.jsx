const InfoBar = () => (
  <div className="info-bar">
    <div className="container">
      <div className="row align-items-center gy-3">
        {/* Contacto */}
        <div className="col-sm-6 col-lg-4">
          <div className="info-bar-item">
            <span className="info-bar-label">Contacto</span>
            <a
              href="https://wa.me/50760544016"
              className="info-bar-value text-decoration-none d-flex align-items-center gap-1"
              style={{ color: 'var(--iom-primary)' }}
            >
              <i className="uil uil-whatsapp" style={{ fontSize: '1rem' }} />
              +507 6054-4016
            </a>
            <a
              href="mailto:miodontopanama@gmail.com"
              className="info-bar-value text-decoration-none"
              style={{ color: 'var(--iom-primary)' }}
            >
              miodontopanama@gmail.com
            </a>
          </div>
        </div>

        {/* Horario */}
        <div className="col-sm-6 col-lg-4">
          <div className="info-bar-item">
            <span className="info-bar-label">Horario</span>
            <span className="info-bar-value">Lunes – Viernes: 9:00 am – 6:00 pm</span>
            <span className="info-bar-value">Sábado: 9:00 am – 1:00 pm</span>
          </div>
        </div>

        {/* CTA */}
        <div className="col-lg-4 d-flex justify-content-lg-end">
          <a
            href="https://wa.me/50760544016"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-iom-dark d-inline-flex align-items-center gap-2"
            aria-label="Enviar mensaje por WhatsApp"
          >
            <i className="uil uil-comment-alt-message" />
            Envía un mensaje
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default InfoBar;

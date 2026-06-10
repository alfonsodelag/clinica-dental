const contactItems = [
  {
    icon: 'uil-map-marker',
    label: 'Dirección',
    value: 'Avenida Abel Bravo, Duplex #7, Obarrio\nDetrás del Hotel Sortis, Ciudad de Panamá\n~250 m de la estación Metro Vía Argentina'
  },
  {
    icon: 'uil-whatsapp',
    label: 'WhatsApp / Teléfono',
    value: '+507 6054-4016',
    href: 'https://wa.me/50760544016'
  },
  {
    icon: 'uil-envelope',
    label: 'Correo electrónico',
    value: 'miodontopanama@gmail.com',
    href: 'mailto:miodontopanama@gmail.com'
  },
  {
    icon: 'uil-instagram',
    label: 'Instagram',
    value: '@odonto.panama',
    href: 'https://www.instagram.com/odonto.panama'
  }
];

const ContactSection = () => (
  <section className="contact-section" id="contacto">
    <div className="container">
      <div className="text-center mb-5">
        <span className="section-label">Contáctenos Hoy</span>
        <h2 className="merriweather" style={{ fontSize: '2.2rem' }}>
          Agenda tu{' '}
          <span style={{ color: 'var(--iom-turquoise)' }}>Consulta</span>{' '}
          Profesional
        </h2>
        <p className="lato mt-3" style={{ color: 'var(--iom-text-secondary)', maxWidth: 500, margin: '12px auto 0' }}>
          Estamos en el corazón de Obarrio. Escríbenos por WhatsApp o visítanos
          sin cita previa durante nuestro horario de atención.
        </p>
      </div>

      <div className="row g-5 align-items-start">
        {/* Map */}
        <div className="col-lg-7">
          <div className="contact-map-wrap">
            {/* Obarrio, Panama City – coordinates: 8.9924° N, 79.5199° W */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d-79.5199!3d8.9924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1c8e79b2d%3A0xabc123!2sObarrio%2C%20Panama%20City!5e0!3m2!1ses!2spa!4v1700000000000"
              title="Odonto Panamá – Obarrio, Ciudad de Panamá"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="lato mt-3" style={{ fontSize: '0.78rem', color: 'var(--iom-text-secondary)' }}>
            <i className="uil uil-info-circle me-1" />
            Avenida Abel Bravo, Duplex #7, Obarrio — detrás del Hotel Sortis. Confirma tu cita por WhatsApp.
          </p>
        </div>

        {/* Contact info */}
        <div className="col-lg-5">
          {contactItems.map(({ icon, label, value, href }) => (
            <div className="contact-info-item" key={label}>
              <div className="contact-info-icon">
                <i className={`uil ${icon}`} />
              </div>
              <div className="contact-info-text">
                <strong>{label}</strong>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="d-block text-decoration-none"
                    style={{ color: 'var(--iom-text-secondary)' }}
                  >
                    {value}
                  </a>
                ) : (
                  value.split('\n').map((line, i) => (
                    <span key={i} className="d-block">{line}</span>
                  ))
                )}
              </div>
            </div>
          ))}

          <div className="mt-4 d-flex flex-column gap-2">
            <a
              href="https://wa.me/50760544016"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-iom-dark w-100 d-flex align-items-center justify-content-center gap-2"
              aria-label="Agendar cita por WhatsApp"
            >
              <i className="uil uil-whatsapp" />
              Agendar Cita por WhatsApp
            </a>
            <a
              href="https://www.instagram.com/odonto.panama"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-iom-outline w-100 d-flex align-items-center justify-content-center gap-2"
              aria-label="Seguir en Instagram @odonto.panama"
            >
              <i className="uil uil-instagram" />
              @odonto.panama en Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;

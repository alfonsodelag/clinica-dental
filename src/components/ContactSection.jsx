import { useMemo, useState } from 'react';
import { services } from '../data';

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

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: ''
};

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);

  const whatsappHref = useMemo(() => {
    const selectedService = services.find(service => service.slug === form.service)?.title || 'No especificado';
    const message = [
      'Hola Odonto Panamá, quiero agendar una cita.',
      `Nombre: ${form.name || 'No especificado'}`,
      `Email: ${form.email || 'No especificado'}`,
      `Teléfono: ${form.phone || 'No especificado'}`,
      `Servicio de interés: ${selectedService}`
    ].join('\n');

    return `https://wa.me/50760544016?text=${encodeURIComponent(message)}`;
  }, [form]);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    window.open(whatsappHref, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">Contáctenos Hoy</span>
          <h2 className="merriweather" style={{ fontSize: '2.2rem' }}>
            Agenda tu{' '}
            <span style={{ color: 'var(--iom-turquoise)' }}>Consulta</span>{' '}
            Profesional
          </h2>
          <p className="lato mt-3" style={{ color: 'var(--iom-text-secondary)', maxWidth: 520, margin: '12px auto 0' }}>
            Estamos en el corazón de Obarrio. Completa tus datos y te llevamos a WhatsApp
            con el mensaje listo para enviar.
          </p>
        </div>

        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <div className="contact-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d-79.5199!3d8.9924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1c8e79b2d%3A0xabc123!2sObarrio%2C%20Panama%20City!5e0!3m2!1ses!2spa!4v1700000000000"
                title="Odonto Panamá - Obarrio, Ciudad de Panamá"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="lato mt-3" style={{ fontSize: '0.78rem', color: 'var(--iom-text-secondary)' }}>
              <i className="uil uil-info-circle me-1" />
              Avenida Abel Bravo, Duplex #7, Obarrio - detrás del Hotel Sortis.
            </p>

            <div className="contact-info-grid">
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
            </div>
          </div>

          <div className="col-lg-6">
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <span className="section-label">Solicitud de cita</span>
              <h3 className="merriweather">Cuéntanos qué necesitas</h3>

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="contact-name">Nombre</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-phone">Teléfono</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+507 ..."
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="contact-service">Servicio de interés</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map(service => (
                      <option value={service.slug} key={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-iom-dark w-100 d-flex align-items-center justify-content-center gap-2 mt-4">
                <i className="uil uil-whatsapp" />
                Enviar por WhatsApp
              </button>
              <p className="contact-form-note lato">
                No guardamos estos datos en el sitio; se usarán para preparar el mensaje de WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

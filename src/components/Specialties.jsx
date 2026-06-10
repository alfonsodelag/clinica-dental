import { specialties } from '../data';

const Specialties = () => (
  <section className="specialties-section" id="especialidades">
    <div className="container">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="section-label section-label-gold">Servicios</span>
        <h2 className="merriweather text-white" style={{ fontSize: '2.2rem' }}>
          Nuestras Especialidades
        </h2>
        <p className="lato mt-3" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '12px auto 0', fontSize: '0.9rem' }}>
          Atención dental integral para niños y adultos con profesionales especializados
          y tecnología de vanguardia en Obarrio, Panamá.
        </p>
      </div>

      {/* Grid */}
      <div className="row g-4">
        {specialties.map(({ id, title, icon, description }) => (
          <div className="col-md-6 col-lg-4" key={id}>
            <div className="specialty-card">
              <div className="specialty-icon">
                <i className={`uil ${icon}`} />
              </div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA bottom */}
      <div className="text-center mt-5">
        <a
          href="https://wa.me/50760544016"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-iom-gold d-inline-flex align-items-center gap-2"
          aria-label="Agendar cita por WhatsApp"
        >
          <i className="uil uil-whatsapp" />
          Agendar Cita por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default Specialties;

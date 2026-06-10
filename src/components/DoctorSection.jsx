import Image from 'next/image';
import { whyUs } from '../data';

const SobreNosotros = () => (
  <section className="doctor-section" id="sobre-nosotros">
    <div className="container">
      <div className="text-center mb-5">
        <span className="section-label">Conócenos</span>
        <h2 className="merriweather" style={{ fontSize: '2.2rem' }}>
          Sobre Odonto Panamá
        </h2>
      </div>

      <div className="row align-items-start g-5">
        {/* Left – text */}
        <div className="col-lg-7">
          <p className="lato mb-4" style={{ color: 'var(--iom-text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            <strong style={{ color: 'var(--iom-primary)' }}>Odonto Panamá</strong> es una clínica dental
            ubicada en Obarrio, Ciudad de Panamá, conformada por un equipo joven, profesional
            y actualizado en las últimas especialidades odontológicas. Iniciamos operaciones
            en 2021 con el firme compromiso de brindar atención dental integral de alto nivel,
            accesible para toda la familia.
          </p>
          <p className="lato mb-5" style={{ color: 'var(--iom-text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            Nuestra propuesta combina odontología preventiva, infantil, estética y restaurativa
            en un mismo lugar: desde limpiezas y evaluaciones hasta ortodoncia, endodoncia,
            prótesis, implantes y cirugías. Contamos con tecnología de vanguardia para
            tratamientos de alta precisión y mínima incomodidad.
          </p>

          {/* Why us grid */}
          <div className="row g-4">
            {whyUs.map(({ id, icon, title, description }) => (
              <div className="col-sm-6" key={id}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    padding: '20px 20px',
                    boxShadow: '0 4px 20px rgba(18,68,92,0.07)',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: 'var(--iom-ice)',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      color: 'var(--iom-primary)',
                      marginBottom: 12,
                    }}
                  >
                    <i className={`uil ${icon}`} />
                  </div>
                  <h4
                    className="merriweather mb-2"
                    style={{ fontSize: '0.92rem', color: 'var(--iom-text)' }}
                  >
                    {title}
                  </h4>
                  <p className="lato mb-0" style={{ fontSize: '0.8rem', color: 'var(--iom-text-secondary)', lineHeight: 1.6 }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <a
              href="https://wa.me/50760544016"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-iom-dark d-inline-flex align-items-center gap-2"
              aria-label="Agendar cita por WhatsApp"
            >
              <i className="uil uil-whatsapp" />
              Agendar Cita
            </a>
          </div>
        </div>

        {/* Right – image */}
        <div className="col-lg-5">
          <div className="doctor-image-wrap">
            <Image
              src="/img/dentist-5.jpg"
              alt="Equipo profesional Odonto Panamá"
              width={480}
              height={520}
              style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Rating badge */}
          <div
            className="d-flex align-items-center gap-3 p-3 mt-3 rounded-iom"
            style={{ background: 'var(--iom-primary)', color: '#fff' }}
          >
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--iom-gold)' }}>4.8</div>
            <div>
              <div style={{ fontSize: '0.78rem', opacity: 0.85 }}>Calificación Google</div>
              <div style={{ color: '#F2B880', fontSize: '0.9rem' }}>★★★★★</div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: '0.72rem', opacity: 0.7 }}>
              @odonto.panama
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SobreNosotros;

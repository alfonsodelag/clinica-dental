import Image from 'next/image';
import { faqItems } from '../data';

const InnovationSection = () => (
  <section className="innovation-section" id="preguntas">
    <div className="container">
      <div className="row align-items-center g-5 g-xl-10">
        {/* Left – image */}
        <div className="col-lg-5">
          <div className="innovation-image-wrap">
            <Image
              src="/img/dentist-3.jpg"
              alt="Equipo dental moderno – Odonto Panamá"
              width={480}
              height={520}
              style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* Right – FAQ accordion */}
        <div className="col-lg-7">
          <span className="section-label">Preguntas Frecuentes</span>
          <h2 className="merriweather mb-4" style={{ fontSize: '2rem', lineHeight: 1.3 }}>
            ¿Tienes{' '}
            <span style={{ color: 'var(--iom-turquoise)' }}>dudas</span>?
            {' '}Aquí las respondemos
          </h2>
          <p className="lato mb-5" style={{ color: 'var(--iom-text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>
            Resolvemos las preguntas más comunes sobre nuestra clínica, ubicación,
            servicios y cómo agendar tu cita de forma rápida y sencilla.
          </p>

          {/* Accordion */}
          <div className="accordion innovation-accordion" id="faqAccordion">
            {faqItems.map(({ id, title, body }, i) => (
              <div className="accordion-item" key={id}>
                <h3 className="accordion-header" id={`heading-${id}`}>
                  <button
                    className={`accordion-button${i !== 0 ? ' collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${id}`}
                    aria-expanded={i === 0 ? 'true' : 'false'}
                    aria-controls={`collapse-${id}`}
                  >
                    {title}
                  </button>
                </h3>
                <div
                  id={`collapse-${id}`}
                  className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`}
                  aria-labelledby={`heading-${id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body lato">{body}</div>
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
              ¿Más preguntas? Escríbenos
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InnovationSection;

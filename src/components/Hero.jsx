import Image from 'next/image';
import NextLink from 'components/NextLink';

const Hero = () => (
  <section className="hero-section">
    <div className="container">
      <div className="row align-items-center g-5">
        {/* Left column – text */}
        <div className="col-lg-6 col-xl-5 order-2 order-lg-1">
          <span className="hero-badge">Clínica Dental en Obarrio, Panamá</span>

          <h1 className="hero-title-iom mb-4 merriweather">
            <span className="accent">Odonto</span>{' '}
            <span className="d-inline">Panamá</span>
            <span className="d-block" style={{ fontSize: '1.7rem', color: 'var(--iom-text-secondary)', fontWeight: 500 }}>
              Cuidamos tu sonrisa con dedicación
            </span>
          </h1>

          <p className="lato mb-5" style={{ color: 'var(--iom-text-secondary)', fontSize: '0.95rem', lineHeight: 1.75 }}>
            En Odonto Panamá ofrecemos atención dental integral para niños y adultos:
            odontología general, ortodoncia, estética dental, endodoncia, prótesis,
            implantes y cirugías. Un equipo joven y profesional con tecnología de vanguardia
            en el corazón de Obarrio.
          </p>

          <div className="d-flex flex-wrap gap-3 align-items-center">
            <a
              href="https://wa.me/50760544016"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-iom-dark d-inline-flex align-items-center gap-2"
              aria-label="Agendar cita por WhatsApp"
            >
              <i className="uil uil-whatsapp" />
              Agendar por WhatsApp
            </a>
            <NextLink
              title="Ver Servicios"
              href="#especialidades"
              className="btn btn-iom-outline"
            />
          </div>

          {/* Trust badge */}
          <div className="d-flex align-items-center gap-3 mt-4">
            <div
              className="d-flex align-items-center gap-2 px-3 py-2 rounded-iom"
              style={{ background: 'var(--iom-ice)', fontSize: '0.8rem', color: 'var(--iom-primary)' }}
            >
              <i className="uil uil-star" style={{ color: '#F2B880' }} />
              <strong>4.8/5</strong>
              <span className="lato" style={{ color: 'var(--iom-text-secondary)' }}>Google Reviews</span>
            </div>
            <div
              className="d-flex align-items-center gap-2 px-3 py-2 rounded-iom"
              style={{ background: 'var(--iom-ice)', fontSize: '0.8rem', color: 'var(--iom-primary)' }}
            >
              <i className="uil uil-calendar-alt" />
              <span className="lato" style={{ color: 'var(--iom-text-secondary)' }}>Desde 2021</span>
            </div>
          </div>
        </div>

        {/* Right column – image */}
        <div className="col-lg-6 col-xl-7 order-1 order-lg-2 d-flex justify-content-center">
          <div className="hero-image-wrap">
            <Image
              src="/img/dentist-1.jpg"
              alt="Clínica Dental Odonto Panamá – Obarrio"
              width={560}
              height={520}
              priority
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

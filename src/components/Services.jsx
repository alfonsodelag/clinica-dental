import Image from 'next/image';
import NextLink from 'components/NextLink';
import { aboutFeatures } from '../data';

const Services = () => (
  <section className="about-section" id="sobre-nosotros-intro">
    <div className="container">
      <div className="row align-items-center g-5 g-xl-10">
        {/* Left – images mosaic */}
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-7">
              <div className="rounded-iom overflow-hidden shadow-iom">
                <Image
                  src="/img/dentist-2.jpg"
                  alt="Odonto Panamá – Clínica dental en Obarrio"
                  width={420}
                  height={320}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
            <div className="col-5 d-flex flex-column gap-3 mt-5">
              <div className="rounded-iom overflow-hidden shadow-iom">
                <Image
                  src="/img/dentist-3.jpg"
                  alt="Equipo profesional Odonto Panamá"
                  width={280}
                  height={200}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="rounded-iom overflow-hidden shadow-iom">
                <Image
                  src="/img/dentist-4.jpg"
                  alt="Atención dental de alta calidad"
                  width={280}
                  height={200}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right – text */}
        <div className="col-lg-6">
          <span className="section-label">+ Servicios</span>

          <h2 className="merriweather mb-4" style={{ fontSize: '2rem', lineHeight: 1.3 }}>
            Odontología{' '}
            <span style={{ color: 'var(--iom-turquoise)' }}>integral</span>{' '}
            para toda la familia
          </h2>

          <p className="lato mb-4" style={{ color: 'var(--iom-text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>
            En Odonto Panamá reunimos odontología preventiva, infantil, estética y restaurativa
            en un mismo espacio céntrico en Obarrio. Desde tu primera limpieza hasta tratamientos
            avanzados como implantes, endodoncia o cirugías, nuestro equipo profesional está
            preparado para cuidarte con tecnología de vanguardia.
          </p>

          <ul className="about-feature-list mb-5">
            {aboutFeatures.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>

          <NextLink
            title="Conocer Servicios"
            href="#especialidades"
            className="btn btn-iom-dark"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Services;

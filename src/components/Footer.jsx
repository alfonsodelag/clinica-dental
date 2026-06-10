import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { services, usefulLinks } from '../data';

const renderWidget = (list, title) => (
  <div className="widget">
    <h3 className="widget-title fs-18 mb-3 merriweather">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ title: itemTitle, id, href = '#' }) => (
        <li key={id} className="mb-1">
          <NextLink href={href} title={itemTitle} className="lato" />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top overflow-hidden bg-color">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-8 gy-6 justify-content-between">
          {/* Logo + Description + Social */}
          <div className="col-lg-3">
            <div className="widget d-flex flex-column">
              <div className="mb-4">
                <Image
                  src="/img/odonto-logo.jpg"
                  alt="Odonto Panamá – Clínica Dental"
                  width={150}
                  height={98}
                />
              </div>
              <p className="mb-4 text-white lato" style={{ fontSize: '0.82rem', lineHeight: 1.75, opacity: 0.85 }}>
                Clínica dental integral en Obarrio, Panamá. Atendemos niños y adultos con odontología general,
                ortodoncia, estética, endodoncia, implantes y cirugías desde 2021.
              </p>
              <h3 className="fs-16 text-white merriweather mb-2">Síguenos en</h3>
              <div className="d-flex gap-3">
                <a
                  href="https://www.instagram.com/odonto.panama"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @odonto.panama"
                  className="text-white"
                  style={{ fontSize: '1.2rem' }}
                >
                  <i className="uil uil-instagram" />
                </a>
                <a
                  href="https://www.facebook.com/odontopanama"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Odonto Panamá"
                  className="text-white"
                  style={{ fontSize: '1.2rem' }}
                >
                  <i className="uil uil-facebook" />
                </a>
                <a
                  href="https://wa.me/50760544016"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Odonto Panamá"
                  className="text-white"
                  style={{ fontSize: '1.2rem' }}
                >
                  <i className="uil uil-whatsapp" />
                </a>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="col-sm-6 col-md-4 col-lg-2 text-white">
            {renderWidget(services, 'Servicios')}
          </div>

          {/* Links Útiles */}
          <div className="col-sm-6 col-md-4 col-lg-2 text-white">
            {renderWidget(usefulLinks, 'Navegación')}
          </div>

          {/* Contacto */}
          <div className="col-md-4 col-lg-3">
            <div className="widget text-white">
              <h3 className="widget-title fs-18 mb-3 merriweather">Contáctenos</h3>
              <div className="d-flex mb-3 align-items-start gap-2">
                <i className="uil uil-map-marker fs-22 flex-shrink-0" />
                <address className="lato mb-0" style={{ fontSize: '0.8rem', opacity: 0.85 }}>
                  Avenida Abel Bravo, Duplex #7, Obarrio<br />
                  Detrás del Hotel Sortis, Ciudad de Panamá
                </address>
              </div>
              <div className="d-flex mb-2 align-items-center gap-2">
                <i className="uil uil-whatsapp fs-20 flex-shrink-0" />
                <a href="https://wa.me/50760544016" className="text-white lato" style={{ fontSize: '0.82rem' }}>
                  +507 6054-4016
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="uil uil-envelope fs-20 flex-shrink-0" />
                <a href="mailto:miodontopanama@gmail.com" className="text-white lato" style={{ fontSize: '0.82rem' }}>
                  miodontopanama@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-5" style={{ borderColor: 'rgba(255,255,255,0.15)' }} />

        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-0 text-white lato text-center" style={{ fontSize: '0.78rem', opacity: 0.7 }}>
            © {currentYear} Odonto Panamá – Clínica Dental. Todos los derechos reservados.
            &nbsp;|&nbsp; Obarrio, Ciudad de Panamá.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

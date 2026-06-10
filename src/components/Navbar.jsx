import { Fragment, useRef } from 'react';
import Image from 'next/image';
import useSticky from 'hooks/useSticky';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';
import { services } from '../data';

const Navbar = ({
  navOtherClass = 'navbar-other d-flex d-lg-none ms-auto',
  navClassName = 'navbar navbar-expand-lg transparent navbar-light',
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const fixedClassName =
    'navbar navbar-expand-lg transparent navbar-light navbar-clone fixed';

  const headerContent = (
    <Fragment>
      {/* Brand */}
      <div className="navbar-brand">
        <NextLink
          href="/"
          title={
            <Image
              alt="Odonto Panamá – Clínica Dental en Obarrio"
              className="py-2"
              src="/img/odonto-logo.jpg"
              width={150}
              height={98}
              priority
            />
          }
        />
      </div>

      {/* Offcanvas */}
      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcavas-bg">
          <NextLink
            href="/"
            title={
              <Image
                alt="Odonto Panamá"
                className="py-2"
                src="/img/odonto-logo.jpg"
                width={130}
                height={85}
                priority
              />
            }
          />
          <button
            type="button"
            aria-label="Cerrar menú"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-4"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Inicio" className="nav-link" />
            </li>
            <li className="nav-item dropdown">
              <DropdownToggleLink
                title="Servicios"
                href="#"
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {services.map(({ id, title }) => (
                  <ListItemLink
                    key={id}
                    href="#especialidades"
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#sobre-nosotros" title="Sobre Nosotros" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#blog" title="Blog" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#preguntas" title="FAQ" className="nav-link" />
            </li>
            <li
              className="nav-item align-items-center d-flex mt-2 mt-lg-0 ms-lg-3"
              data-bs-dismiss="offcanvas"
            >
              <NextLink
                title="Contáctenos"
                href="#contacto"
                className="btn btn-iom-dark mb-lg-1"
              />
            </li>
            {/* WhatsApp */}
            <li className="nav-item align-items-center d-flex ms-lg-2" data-bs-dismiss="offcanvas">
              <a
                href="https://wa.me/50760544016"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#25D366',
                  color: '#fff',
                  fontSize: '1.2rem',
                  textDecoration: 'none',
                }}
              >
                <i className="uil uil-whatsapp" />
              </a>
            </li>
          </ul>

          {/* Mobile footer */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <a href="mailto:miodontopanama@gmail.com" className="link-inverse d-block mb-1">
                miodontopanama@gmail.com
              </a>
              <a href="https://wa.me/50760544016" className="d-block mb-2">+507 6054-4016</a>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hamburger */}
      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
          aria-label="Abrir menú de navegación"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container flex-lg-row flex-nowrap align-items-center">
          {headerContent}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

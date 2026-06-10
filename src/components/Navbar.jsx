import { Fragment, useRef } from 'react';
import Image from 'next/image';
import useSticky from 'hooks/useSticky';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';
import { services } from '../data';

const Navbar = ({
  navOtherClass = 'navbar-other d-flex d-lg-none ms-auto align-items-center',
  navClassName = 'navbar navbar-expand-lg transparent navbar-light main-navbar',
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const fixedClassName =
    'navbar navbar-expand-lg transparent navbar-light navbar-clone fixed main-navbar';

  const headerContent = (
    <Fragment>
      <div className="navbar-brand">
        <NextLink
          href="/"
          title={(
            <Image
              alt="Odonto Panamá - Clínica Dental en Obarrio"
              className="navbar-logo"
              src="/img/odonto-logo.jpg"
              width={138}
              height={90}
              priority
            />
          )}
        />
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcavas-bg">
          <NextLink
            href="/"
            title={(
              <Image
                alt="Odonto Panamá"
                className="navbar-logo"
                src="/img/odonto-logo.jpg"
                width={130}
                height={85}
                priority
              />
            )}
          />
          <button
            type="button"
            aria-label="Cerrar menú"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-4"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav align-items-lg-center">
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
                {services.map(({ id, title, href }) => (
                  <ListItemLink
                    key={id}
                    href={href}
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/#sobre-nosotros" title="Sobre Nosotros" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/#blog" title="Blog" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/#preguntas" title="FAQ" className="nav-link" />
            </li>
            <li className="nav-item align-items-center d-flex mt-3 mt-lg-0 ms-lg-3" data-bs-dismiss="offcanvas">
              <NextLink title="Agenda tu cita" href="/#contacto" className="btn btn-iom-dark nav-cta" />
            </li>
          </ul>

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

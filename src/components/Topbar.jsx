const Topbar = () => (
  <section className="topbar bg-color">
    <div className="container">
      <div className="topbar-inner">
        <a href="#contacto" className="topbar-location" aria-label="Ver ubicación de Odonto Panamá">
          <i className="uil uil-map-marker" />
          <span className="d-none d-md-inline">
            Obarrio, Avenida Abel Bravo, Duplex #7 - detrás del Hotel Sortis
          </span>
          <span className="mobile-location d-md-none">Obarrio, Panamá</span>
        </a>

        <div className="topbar-actions">
          <a
            href="https://wa.me/50760544016"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Odonto Panamá"
          >
            <i className="uil uil-whatsapp" />
            <span>+507 6054-4016</span>
          </a>
          <a href="mailto:miodontopanama@gmail.com" className="topbar-email d-none d-lg-inline-flex" aria-label="Email Odonto Panamá">
            <i className="uil uil-envelope" />
            <span>miodontopanama@gmail.com</span>
          </a>
          <a href="https://www.facebook.com/odontopanama" className="topbar-social d-none d-md-inline-flex" aria-label="Facebook Odonto Panamá">
            <i className="uil uil-facebook" />
          </a>
          <a href="https://www.instagram.com/odonto.panama" className="topbar-social d-none d-md-inline-flex" aria-label="Instagram @odonto.panama">
            <i className="uil uil-instagram" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Topbar;

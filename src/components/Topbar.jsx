const Topbar = () => (
  <section className="bg-color d-none d-md-block" style={{ padding: '8px 0' }}>
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-xl-5 d-none d-xl-flex">
          <p className="m-0 text-white lato" style={{ fontSize: '0.78rem' }}>
            Obarrio, Avenida Abel Bravo, Duplex #7 — detrás del Hotel Sortis, Ciudad de Panamá
          </p>
        </div>

        <div className="d-flex align-items-center gap-4 col-auto">
          <a
            href="https://wa.me/50760544016"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-2 text-decoration-none"
            aria-label="WhatsApp Odonto Panamá"
          >
            <i className="uil uil-whatsapp text-white" style={{ fontSize: '0.9rem' }} />
            <span className="text-white lato" style={{ fontSize: '0.78rem' }}>+507 6054-4016</span>
          </a>
          <a
            href="mailto:miodontopanama@gmail.com"
            className="d-flex align-items-center gap-2 text-decoration-none"
            aria-label="Email Odonto Panamá"
          >
            <i className="uil uil-envelope text-white" style={{ fontSize: '0.9rem' }} />
            <span className="text-white lato" style={{ fontSize: '0.78rem' }}>miodontopanama@gmail.com</span>
          </a>
        </div>

        <div className="d-flex align-items-center gap-3 col-auto">
          <a href="https://www.facebook.com/odontopanama" aria-label="Facebook Odonto Panamá">
            <i className="uil uil-facebook text-white" style={{ fontSize: '1rem' }} />
          </a>
          <a href="https://www.instagram.com/odonto.panama" aria-label="Instagram @odonto.panama">
            <i className="uil uil-instagram text-white" style={{ fontSize: '1rem' }} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Topbar;

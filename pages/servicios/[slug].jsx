import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'components/NextLink';
import PageProgress from 'components/PageProgress';
import { getServiceHref, servicePageMap, servicePages } from '../../src/servicePages';

const whatsappUrl = 'https://wa.me/50760544016';

const ServicePage = ({ service, relatedServices }) => {
  if (!service) return null;

  const pageTitle = `${service.title} | Odonto Panama`;
  const description = `${service.summary} Agenda tu evaluacion en Odonto Panama, Obarrio.`;

  return (
    <>
      <PageProgress />
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="es_PA" />
      </Head>

      <main className="service-page">
        <section className="service-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="section-label">{service.eyebrow}</span>
                <h1 className="merriweather service-title">{service.title}</h1>
                <p className="lato service-summary">{service.summary}</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-iom-dark d-inline-flex align-items-center gap-2"
                    aria-label={`Agendar evaluacion de ${service.title} por WhatsApp`}
                  >
                    <i className="uil uil-whatsapp" />
                    Agendar por WhatsApp
                  </a>
                  <NextLink href="/#especialidades" title="Ver todos los servicios" className="btn btn-iom-outline" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-hero-image">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} en Odonto Panama`}
                    width={720}
                    height={540}
                    priority
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-content-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <article className="service-article">
                  <p className="service-lead lato">{service.intro}</p>

                  <h2 className="merriweather">Que incluye este servicio</h2>
                  <div className="service-check-grid">
                    {service.highlights.map(item => (
                      <div className="service-check" key={item}>
                        <i className="uil uil-check-circle" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <h2 className="merriweather">Cuando consultar</h2>
                  <ul className="service-list">
                    {service.idealFor.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h2 className="merriweather">Como suele ser el proceso</h2>
                  <div className="service-steps">
                    {service.process.map((step, index) => (
                      <div className="service-step" key={step}>
                        <span>{index + 1}</span>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>

                  <h2 className="merriweather">Preguntas frecuentes</h2>
                  <div className="service-faq-list">
                    {service.faq.map(item => (
                      <div className="service-faq" key={item.question}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                      </div>
                    ))}
                  </div>

                  <div className="service-disclaimer">
                    <strong>Nota clinica:</strong> esta informacion es orientativa. El diagnostico y el plan final dependen de una evaluacion profesional en consulta.
                  </div>
                </article>
              </div>

              <aside className="col-lg-4">
                <div className="service-sidebar">
                  <div className="service-sidebar-card">
                    <span className="section-label">Odonto Panama</span>
                    <h2 className="merriweather">Agenda tu evaluacion</h2>
                    <p className="lato">
                      Estamos en Obarrio, Ciudad de Panama. Escribenos por WhatsApp para confirmar disponibilidad y resolver tus dudas.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-iom-dark w-100 d-inline-flex align-items-center justify-content-center gap-2"
                      aria-label="Agendar cita por WhatsApp"
                    >
                      <i className="uil uil-whatsapp" />
                      Contactar
                    </a>
                  </div>

                  <div className="service-sidebar-card">
                    <h2 className="merriweather">Servicios relacionados</h2>
                    <div className="service-related-list">
                      {relatedServices.map(item => (
                        <NextLink
                          key={item.slug}
                          href={getServiceHref(item.slug)}
                          title={item.title}
                          className="service-related-link"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="service-sidebar-card">
                    <h2 className="merriweather">Fuentes consultadas</h2>
                    <ul className="service-source-list">
                      {service.sources.map(source => (
                        <li key={source.url}>
                          <a href={source.url} target="_blank" rel="noopener noreferrer">
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticPaths = async () => ({
  paths: servicePages.map(service => ({ params: { slug: service.slug } })),
  fallback: false
});

export const getStaticProps = async ({ params }) => {
  const service = servicePageMap[params.slug];
  const relatedServices = (service?.related || [])
    .map(slug => servicePageMap[slug])
    .filter(Boolean);

  return {
    props: {
      service,
      relatedServices
    }
  };
};

export default ServicePage;

import Image from 'next/image';
import NextLink from './NextLink';

const BlogSection = ({ posts = [] }) => (
  <section className="blog-section" id="blog">
    <div className="container">
      <div className="text-center mb-5">
        <span className="section-label">El Blog</span>
        <h2 className="merriweather" style={{ fontSize: '2.2rem' }}>
          Nuestras Publicaciones
        </h2>
        <p className="lato" style={{ color: 'var(--iom-text-secondary)', maxWidth: 540, margin: '12px auto 0' }}>
          Mantente informado con artículos sobre salud bucal, nuevas técnicas
          y avances en odontología para tomar mejores decisiones sobre tu sonrisa.
        </p>
      </div>

      <div className="row g-4">
        {posts.map(({ id, title, slug, category, image, excerpt, date, readTime }) => (
          <div className="col-md-4" key={id || slug}>
            <article className="blog-card">
              <NextLink
                href={`/blog/${slug}`}
                className="blog-image-link"
                title={(
                  <Image
                    src={image}
                    alt={title}
                    width={420}
                    height={220}
                    className="blog-card-img"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                )}
              />
              <div className="blog-card-body">
                <span className="blog-category">{category}</span>
                <h3 className="blog-card-title merriweather">
                  <NextLink href={`/blog/${slug}`} title={title} className="blog-title-link" />
                </h3>
                <p className="blog-card-excerpt lato">{excerpt}</p>
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <NextLink
                    href={`/blog/${slug}`}
                    className="blog-read-more"
                    title={(
                      <>
                        Leer más <i className="uil uil-arrow-right" />
                      </>
                    )}
                  />
                  <span className="lato blog-card-meta">
                    {date} · {readTime}
                  </span>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;

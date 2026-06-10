import Image from 'next/image';
import { blogPosts } from '../data';

const BlogSection = () => (
  <section className="blog-section" id="blog">
    <div className="container">
      <div className="text-center mb-5">
        <span className="section-label">El Blog</span>
        <h2 className="merriweather" style={{ fontSize: '2.2rem' }}>
          Nuestras Publicaciones
        </h2>
        <p className="lato" style={{ color: 'var(--iom-text-secondary)', maxWidth: 540, margin: '12px auto 0' }}>
          Mantente informado con nuestros artículos sobre salud bucal, nuevas técnicas
          y los últimos avances en odontología y cirugía maxilofacial.
        </p>
      </div>

      <div className="row g-4">
        {blogPosts.map(({ id, title, category, image, excerpt, date, readTime }) => (
          <div className="col-md-4" key={id}>
            <article className="blog-card">
              <Image
                src={image}
                alt={title}
                width={420}
                height={200}
                className="blog-card-img"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div className="blog-card-body">
                <span className="blog-category">{category}</span>
                <h3 className="blog-card-title merriweather">{title}</h3>
                <p className="blog-card-excerpt lato">{excerpt}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#blog" className="blog-read-more">
                    Leer más <i className="uil uil-arrow-right" />
                  </a>
                  <span
                    className="lato"
                    style={{ fontSize: '0.72rem', color: 'var(--iom-text-secondary)' }}
                  >
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

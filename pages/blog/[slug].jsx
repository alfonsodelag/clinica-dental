import Head from 'next/head';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import NextLink from 'components/NextLink';
import PageProgress from 'components/PageProgress';
import { fallbackBlogPosts } from '../../src/blogPosts';
import { getBlogPostBySlug, getBlogPosts } from '../../src/lib/sanity';

const BlogPostPage = ({ post }) => (
  <>
    <PageProgress />
    <Head>
      <title>{post.title} | Odonto Panamá</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.image} />
    </Head>

    <main className="blog-post-page">
      <section className="blog-post-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <span className="section-label">{post.category}</span>
              <h1 className="merriweather blog-post-title">{post.title}</h1>
              <div className="blog-post-meta lato">
                {post.date} · {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-post-content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="blog-post-image">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1100}
                  height={620}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <article className="blog-post-content lato">
                {Array.isArray(post.body) && typeof post.body[0] === 'string' ? (
                  post.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)
                ) : (
                  <PortableText value={post.body || []} />
                )}
              </article>

              <div className="blog-post-actions">
                <NextLink href="/#blog" title="Volver al blog" className="btn btn-iom-outline" />
                <a
                  href="https://wa.me/50760544016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-iom-dark d-inline-flex align-items-center gap-2"
                  aria-label="Agendar cita por WhatsApp"
                >
                  <i className="uil uil-whatsapp" />
                  Agendar cita
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
);

export const getStaticPaths = async () => {
  const posts = await getBlogPosts();
  const paths = posts.length ? posts : fallbackBlogPosts;

  return {
    paths: paths.map(post => ({ params: { slug: post.slug } })),
    fallback: 'blocking'
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 60
  };
};

export default BlogPostPage;

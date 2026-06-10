import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { fallbackBlogPostMap, fallbackBlogPosts } from '../blogPosts';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-10';

export const sanityEnabled = Boolean(projectId);

export const sanityClient = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true
    })
  : null;

const builder = sanityEnabled ? imageUrlBuilder(sanityClient) : null;

export const urlForSanityImage = source => {
  if (!source || !builder) return null;
  return builder.image(source).width(1200).height(760).fit('crop').auto('format').url();
};

const postFields = `
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  publishedAt,
  readTime,
  body,
  mainImage,
  "image": mainImage.asset->url
`;

export async function getBlogPosts() {
  if (!sanityClient) return fallbackBlogPosts;

  try {
    const posts = await sanityClient.fetch(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { ${postFields} }`
    );

    return posts.length ? posts.map(normalizeSanityPost) : fallbackBlogPosts;
  } catch {
    return fallbackBlogPosts;
  }
}

export async function getBlogPostBySlug(slug) {
  if (!sanityClient) return fallbackBlogPostMap[slug] || null;

  try {
    const post = await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0] { ${postFields} }`,
      { slug }
    );

    return post ? normalizeSanityPost(post) : fallbackBlogPostMap[slug] || null;
  } catch {
    return fallbackBlogPostMap[slug] || null;
  }
}

function normalizeSanityPost(post) {
  const publishedDate = post.publishedAt
    ? new Intl.DateTimeFormat('es-PA', { month: 'long', year: 'numeric' }).format(new Date(post.publishedAt))
    : 'Sin fecha';

  return {
    id: post._id,
    title: post.title,
    slug: post.slug,
    category: post.category || 'Blog',
    image: post.image || urlForSanityImage(post.mainImage) || '/img/dentist-3.jpg',
    excerpt: post.excerpt || '',
    date: publishedDate.charAt(0).toUpperCase() + publishedDate.slice(1),
    readTime: post.readTime || '5 min',
    body: post.body || []
  };
}

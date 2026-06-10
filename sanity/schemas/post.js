export default {
  name: 'post',
  title: 'Artículo de Blog',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título', type: 'string', validation: Rule => Rule.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    { name: 'category', title: 'Categoría', type: 'string' },
    { name: 'excerpt', title: 'Resumen', type: 'text', rows: 3 },
    { name: 'publishedAt', title: 'Fecha de publicación', type: 'datetime' },
    { name: 'readTime', title: 'Tiempo de lectura', type: 'string' },
    { name: 'mainImage', title: 'Imagen principal', type: 'image', options: { hotspot: true } },
    {
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
};

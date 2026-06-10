import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Artículo del Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(120)
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Tecnología', value: 'Tecnología' },
          { title: 'Implantes', value: 'Implantes' },
          { title: 'Odontopediatría', value: 'Odontopediatría' },
          { title: 'Estética Dental', value: 'Estética Dental' },
          { title: 'Ortodoncia', value: 'Ortodoncia' },
          { title: 'Prevención', value: 'Prevención' },
          { title: 'Noticias', value: 'Noticias' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'readTime',
      title: 'Tiempo de lectura',
      type: 'string',
      placeholder: 'ej. 5 min',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen (excerpt)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300)
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          validation: Rule => Rule.required()
        }
      ]
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Título H2', value: 'h2' },
            { title: 'Título H3', value: 'h3' },
            { title: 'Cita', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Negrita', value: 'strong' },
              { title: 'Cursiva', value: 'em' }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Descripción de la imagen'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Pie de foto'
            }
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'mainImage'
    },
    prepare ({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media
      }
    }
  }
})

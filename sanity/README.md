# Sanity Blog

El sitio lee artículos desde Sanity si existen estas variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-10
```

Tipo de documento esperado: `post`.

Campos principales:

- `title`
- `slug`
- `category`
- `excerpt`
- `publishedAt`
- `readTime`
- `mainImage`
- `body`

Si las variables no están configuradas o Sanity no responde, el blog usa los 3 artículos locales de `src/blogPosts.js`.

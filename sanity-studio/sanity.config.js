import { defineConfig } from 'sanity'
import { structuredDocuments } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'odonto-panama',
  title: 'Odonto Panamá – Blog CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structuredDocuments({
      defaultDocumentNode: (S) =>
        S.document().views([S.view.form()])
    })
  ],

  schema: {
    types: schemaTypes
  }
})

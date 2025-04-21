import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import member from './schemas/member'

export default defineConfig({
  name: 'default',
  title: 'arbeidskrav3-sanity',

  projectId: 'rzoh5hjw',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [member],
  },
})

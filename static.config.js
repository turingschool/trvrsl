// @flow
import fs from 'fs'
import path from 'path'
import React, { type ComponentType } from 'react'
import { extractCritical } from 'emotion-server'
import { camelize } from 'humps'
import Document, { type RenderMeta } from './src/templates/Document'

const getDocs = () => {
  const docs = {}
  const docsDir = path.join(__dirname, 'docs')
  const filenames = fs.readdirSync(docsDir)
  const files = filenames.filter(filename => path.extname(filename) === '.md')
  files.forEach((filename) => {
    const key = camelize(path.basename(filename, '.md').toLowerCase())
    docs[key] = fs.readFileSync(path.join(docsDir, filename), 'utf-8')
  })
  return docs
}

export default {
  siteRoot: 'http://traversalconf.com',
  paths: { devDist: '.scratch/dev-server' },
  Document,
  renderToHtml: async (render: (*) => string, Comp: ComponentType<*>, meta: RenderMeta) => {
    const html = render(<Comp />)
    const { css, ids } = extractCritical(html)
    meta.css = css // eslint-disable-line no-param-reassign
    meta.ids = ids // eslint-disable-line no-param-reassign
    return html
  },
  getSiteData: async () => ({
    title: 'Ahoy!',
  }),
  getRoutes: async () => {
    const docs = await getDocs()
    const [scheduleSource, ...scheduleCards] = docs.schedule.split(/\n(?=#{1,2}\s)/)
    const [speakersSource, ...speakersCards] = docs.speakers.split(/\n(?=#{1,2}\s)/)
    return [
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => ({
          isHome: true,
          scheduleCards,
          scheduleSource,
          speakersCards,
          speakersSource,
          ...docs,
        }),
      },
      {
        path: '/anti-harrassment-policy',
        component: 'src/pages/Content',
        getData: () => ({
          source: docs.antiHarrassmentPolicy,
        }),
      },
      {
        is404: true,
        component: 'src/pages/Content',
        getData: () => ({
          source: docs.notFound,
        }),
      },
    ]
  },
}

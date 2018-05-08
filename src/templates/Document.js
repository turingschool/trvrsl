// @flow
import React, { type ElementType, type Node } from 'react'
import { META } from '../constants/en'
import { COLOR, GLOBAL_CSS } from '../constants/styles'

export type RenderMeta = {
  css: string,
  ids: string,
}

type Props = {
  Html: ElementType,
  Head: ElementType,
  Body: ElementType,
  children: Node,
  renderMeta: RenderMeta,
}

export default class extends React.Component<Props> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { Html, Head, Body, children, renderMeta } = this.props
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <title>{META.TITLE}</title>
          <meta name="application-name" content={META.NAME} />
          <meta name="subject" content={META.DESCRIPTION} />
          <meta name="name" itemProp="name" content={META.NAME} />
          <meta name="image" itemProp="image" content={META.IMAGE} />
          <meta name="url" itemProp="url" content={META.URL} />
          <meta name="description" itemProp="description" content={META.DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={META.NAME} />
          <meta property="og:title" content={META.TITLE} />
          <meta property="og:image" content={META.IMAGE} />
          <meta property="og:width" content={META.IMAGE_WIDTH} />
          <meta property="og:height" content={META.IMAGE_HEIGHT} />
          <meta property="og:url" content={META.URL} />
          <meta property="og:description" content={META.DESCRIPTION} />
          <meta name="twitter:card" content={META.IMAGE} />
          <meta name="referrer" content="always" />
          <meta name="robots" content="index, follow" />
          <link href={META.ICON} color={COLOR} rel="mask-icon" />
          <link rel="shortcut icon" href={META.FAVICON} />
          <link rel="manifest" href={META.MANIFEST} />
          <link href="https://fonts.googleapis.com/css?family=Barlow:200,300,400,700" rel="stylesheet" />
          { /* eslint-disable react/no-danger */ }
          <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS + renderMeta.css }} />
          <script dangerouslySetInnerHTML={{ __html: `window.hydrateStyleIds = ${JSON.stringify(renderMeta.ids)};` }} />
          { /* eslint-enable react/no-danger */ }
        </Head>
        <Body>
          {children}
        </Body>
      </Html>
    )
  }
}

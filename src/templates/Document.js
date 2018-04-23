// @flow
import React, { type ElementType, type Node } from 'react'
import { GLOBAL_CSS } from '../constants/styles'

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
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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

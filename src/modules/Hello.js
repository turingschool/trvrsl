// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import MarkdownHeadings from '../elements/MarkdownHeadings'
import { Article, LineArt, Logo, Section, Title } from '../elements/Hello'

type Props = {
  source: string,
}

const components = () => ({
  heading: props => MarkdownHeadings(props, [Title]),
  root: Article,
})

export default (props: Props) => (
  <Section id="hello">
    <Logo />
    <ReactMarkdown
      renderers={components()}
      source={props.source}
    />
    <LineArt
      alt="trvrsl line art"
      src="/trvrsl-lineart.png"
      width={1440}
      height={788}
    />
  </Section>
)

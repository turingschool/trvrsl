// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import MarkdownHeadings from '../elements/MarkdownHeadings'
import { Section, Title } from '../elements/Location'

type Props = {
  source: string,
}

const components = () => ({
  heading: props => MarkdownHeadings(props, [Title]),
})

export default (props: Props) => (
  <Section id="location">
    <ReactMarkdown
      renderers={components()}
      source={props.source}
    />
  </Section>
)

// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import MarkdownHeadings from '../elements/MarkdownHeadings'
import { Section, Title } from '../elements/Schedule'

type Props = {
  source: string,
}

const components = () => ({
  heading: props => MarkdownHeadings(props, [Title]),
  root: Section,
})

export default (props: Props) => (
  <Section id="schedule">
    <ReactMarkdown
      renderers={components()}
      source={props.source}
    />
  </Section>
)

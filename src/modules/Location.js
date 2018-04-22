// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import Article from '../elements/Article'
import BaseSection from '../elements/Section'
import Heading from '../elements/Heading'
import Paragraph from '../elements/Paragraph'
import Title from '../elements/Title'

const Section = styled(BaseSection)({
  backgroundColor: '#eee',
})

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title, Heading]),
  paragraph: Paragraph,
  root: Article,
})

// -------------------------------------

type Props = {
  source: string,
}

export default (props: Props) => (
  <Section id="location">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
  </Section>
)

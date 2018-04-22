// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import Article from '../elements/Article'
import BaseSection from '../elements/Section'
import MarkdownHeadings from '../elements/MarkdownHeadings'
import Paragraph from '../elements/Paragraph'
import Title from '../elements/Title'

const Section = styled(BaseSection)({
  color: '#fff',
  backgroundImage: 'linear-gradient(-180deg, #FF0092 1%, #D800FF 100%)',
})

const components = ({
  heading: props => MarkdownHeadings(props, [Title]),
  paragraph: Paragraph,
  root: Article,
})

// -------------------------------------

type Props = {
  source: string,
}

export default (props: Props) => (
  <Section id="contact">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
  </Section>
)

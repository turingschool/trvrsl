// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import Article from '../elements/Article'
import BaseSection from '../elements/Section'
import Paragraph from '../elements/Paragraph'
import Title from '../elements/Title'

const Section = styled(BaseSection)({
  color: '#fff',
  backgroundImage: 'linear-gradient(-180deg, #00faff 0%, #00e8ff 20%, #0091ff 100%)',
})

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title]),
  paragraph: Paragraph,
  root: Article,
})

// -------------------------------------

type Props = {
  source: string,
}

export default (props: Props) => (
  <Section id="attendees">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
  </Section>
)

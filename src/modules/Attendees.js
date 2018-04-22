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
  position: 'relative',
  color: '#fff',
  backgroundImage: 'linear-gradient(-180deg, #00faff 0%, #00e8ff 20%, #0091ff 100%)',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: '2rem',
    backgroundImage: 'linear-gradient(-90deg, #ff0092 0%, #d800ff 100%)',
  },
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
  <Section id="attendees">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
  </Section>
)

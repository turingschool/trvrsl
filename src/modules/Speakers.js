// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import Card from '../blocks/SpeakerCard'
import Article from '../elements/Article'
import BaseSection from '../elements/Section'
import Paragraph from '../elements/Paragraph'
import Title from '../elements/Title'

const Section = styled(BaseSection)({
  backgroundColor: '#eee',
})

const Cards = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(19rem, 1fr))',
  gridGap: '1rem',
  maxWidth: '81rem',
  margin: '3rem auto 0',
})

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title]),
  paragraph: Paragraph,
  root: Article,
})

// -------------------------------------

type Props = {
  cards: Array<string>,
  source: string,
}

export default (props: Props) => (
  <Section id="speakers">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
    <Cards>
      { props.cards.map(card => (
        <Card card={card} key={card} />
    ))}
    </Cards>
  </Section>
)

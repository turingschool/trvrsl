// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import Card from '../blocks/Card'
import Article from '../elements/Article'
import BaseSection from '../elements/Section'
import MarkdownHeadings from '../elements/MarkdownHeadings'
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
  margin: '0 auto',
})

const components = ({
  heading: props => MarkdownHeadings(props, [Title]),
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

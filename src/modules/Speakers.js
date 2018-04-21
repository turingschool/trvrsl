// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import MarkdownHeadings from '../elements/MarkdownHeadings'
import { Card, Cards, Header, Section, Title } from '../elements/Speakers'

type Props = {
  cards: Array<string>,
  source: string,
}

const components = () => ({
  heading: props => MarkdownHeadings(props, [Title]),
  root: Header,
})

const cardComponents = () => ({
  root: Card,
})

export default (props: Props) => (
  <Section id="speakers">
    <ReactMarkdown
      renderers={components()}
      source={props.source}
    />
    <Cards>
      { props.cards.map(card => (
        <ReactMarkdown
          key={card}
          renderers={cardComponents()}
          source={card}
        />
    ))}
    </Cards>
  </Section>
)

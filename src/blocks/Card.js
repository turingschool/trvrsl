// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'

const Card = styled.div({
  outline: '1px dotted blue',
})

const Title = styled.h2({
  fontSize: 28,
  fontWeight: 300,
})

const Paragraph = styled.p({
  fontSize: 14,
  fontWeight: 300,
})

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title, Title]),
  paragraph: Paragraph,
  root: Card,
})

// -------------------------------------

type Props = {
  card: string,
}

export default ({ card }: Props) => (
  <ReactMarkdown
    key={card}
    renderers={components}
    source={card}
  />
)

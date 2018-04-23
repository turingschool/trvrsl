// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import { MQ } from '../constants/styles'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import BaseList from '../elements/List'
import Heading from '../elements/Heading'

const Card = styled.div({
  width: '100%',
})

const List = styled(BaseList)({
  marginTop: '2rem',
  [MQ.MIN_BREAK_40]: {
    marginTop: '3rem',
  },
})

const ListItem = styled.li({
  display: 'block',
  marginBottom: '1.5rem',
  [MQ.MIN_BREAK_40]: {
    marginBottom: '1rem',
  },
})

const Strong = styled.strong({
  fontWeight: 700,
  color: '#048bfa',
})

const Em = styled.em({
  display: 'block',
  [MQ.MIN_BREAK_40]: {
    display: 'inline-block',
    marginLeft: '1rem',
    marginRight: '3rem',
  },
})

const components = ({
  emphasis: Em,
  heading: props => assignMarkdownHeadings(props, [Heading, Heading]),
  list: List,
  listItem: ListItem,
  root: Card,
  strong: Strong,
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

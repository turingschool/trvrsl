// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import Img from '../elements/ResponsiveImg'
import BaseList from '../elements/List'
import Link from '../elements/SpeakerCardLink'

const Card = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '30rem',
  padding: '13rem 1rem 0.5rem',
  backgroundColor: '#fff',
})

const Photo = styled(Img)({
  position: 'absolute',
  top: '1rem',
  left: '1rem',
  right: '1rem',
  display: 'block',
  width: 'calc(100% - 2rem)',
  maxHeight: '11rem',
})

const Title = styled.h2({
  fontSize: 28,
  fontWeight: 300,
  color: '#0091ff',
})

const Paragraph = styled.p({
  fontSize: 14,
  fontWeight: 300,
})

const List = styled(BaseList)({
  marginTop: 'auto',
})

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title, Title]),
  paragraph: Paragraph,
  image: Photo,
  imageReference: Photo,
  link: Link,
  list: List,
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

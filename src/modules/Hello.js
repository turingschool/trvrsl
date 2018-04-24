// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import { MQ } from '../constants/styles'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import Article from '../elements/Article'
import BaseList from '../elements/List'
import Img from '../elements/ResponsiveImg'
import PillLink from '../elements/PillLink'

const Section = styled.section({
  paddingTop: '4rem',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#000',
  [MQ.MIN_BREAK_40]: {
    paddingTop: '8rem',
  },
})

const LineArt = styled(Img)({
  display: 'block',
  marginTop: '4rem',
  maxHeight: 788,
  objectPosition: '50% 0',
  [MQ.MIN_BREAK_40]: {
    marginTop: '8rem',
  },
})

const Title = styled.h1({
  padding: '0 1rem',
  fontSize: '2.5rem',
  fontWeight: 300,
  [MQ.MIN_BREAK_40]: {
    padding: 0,
    fontSize: '3rem',
  },
})

const Paragraph = styled.p({
  padding: '0 1rem',
  fontSize: '1rem',
  fontWeight: 200,
  maxWidth: '50.25rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  [MQ.MIN_BREAK_40]: {
    padding: 0,
    fontSize: '1.5rem',
  },
})

const List = styled(BaseList)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '3rem 0 0 -1rem',
  [MQ.MIN_BREAK_40]: {
    flexDirection: 'row',
  },
})

const ListItem = styled.li({
  display: 'flex',
  marginBottom: '1rem',
  [MQ.MIN_BREAK_40]: {
    marginBottom: 0,
    marginLeft: '1rem',
  },
})

const Link = styled(PillLink)({
  color: '#bfbdbd',
  backgroundClip: 'content-box, border-box',
  backgroundColor: 'transparent',
  backgroundImage: 'linear-gradient(#000, #000), linear-gradient(90deg, #d800ff, #ff0092)',
  backgroundOrigin: 'border-box',
  borderColor: 'transparent',
  'li + li > &': {
    backgroundImage: 'linear-gradient(#000, #000), linear-gradient(90deg, #0091ff, #00faff)',
  },
})

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title]),
  link: Link,
  linkReference: Link,
  list: List,
  listItem: ListItem,
  paragraph: Paragraph,
  root: Article,
})

// -------------------------------------

const isProduction = () => process.env.NODE_ENV === 'production'

type Props = {
  source: string,
}

export default (props: Props) => (
  <Section id="introduction">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
    <LineArt
      alt="trvrsl line art"
      src={`${isProduction() ? 'https://turingschool.github.io./trvrsl' : ''}/trvrsl-lineart.png`}
      width="100%"
      height={788}
    />
  </Section>
)

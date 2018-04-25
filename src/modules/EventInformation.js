// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import Article from '../elements/Article'
import BaseHeading from '../elements/Heading'
import BaseSection from '../elements/Section'
import BaseTitle from '../elements/Title'
import List from '../elements/List'
import InfoLink from '../elements/InfoLink'
import Paragraph from '../elements/Paragraph'

const Section = styled(BaseSection)({
  color: '#4a4a4a',
})

const Title = styled(BaseTitle)({
  color: '#000',
})

const Heading = styled(BaseHeading)({
  marginTop: '3rem',
})

const Link = styled(InfoLink)({
  'ul:first-of-type &': {
    marginTop: '3rem',
    marginBottom: '2rem',
  },
  'h2 ~ ul &': {
    marginTop: '3rem',
  },
})

const ListItem = styled.li({
  display: 'inline-block',
})

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title, Heading]),
  link: Link,
  linkReference: Link,
  list: List,
  listItem: ListItem,
  paragraph: Paragraph,
  root: Article,
})

// -------------------------------------

type Props = {
  source: string,
}

export default (props: Props) => (
  <Section id="event-information">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
  </Section>
)

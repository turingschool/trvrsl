// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import { withRouteData } from 'react-static'
import { SPEED } from '../constants/styles'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import BaseArticle from '../elements/Article'
import BaseSection from '../elements/Section'
import BaseTitle from '../elements/Title'
import Heading from '../elements/Heading'
import Paragraph from '../elements/Paragraph'

const Section = styled(BaseSection)({
  minHeight: 'calc(100vh - 26.25rem)',
})

const Article = styled(BaseArticle)({
  paddingTop: '6rem',
  textAlign: 'left',
})

const Link = styled.a({
  textDecoration: 'none',
  color: '#0091ff',
  transition: `color ${SPEED}`,
  '.no-touch &:hover': {
    color: '#ff0092',
  },
})

const Title = styled(BaseTitle)({
  textAlign: 'center',
})

// -------------------------------------

type Props = {
  source: string,
}

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title, Heading]),
  link: Link,
  linkReference: Link,
  paragraph: Paragraph,
  root: Article,
})

export default withRouteData((props: Props) => (
  <Section>
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
  </Section>
))


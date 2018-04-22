// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import Article from '../elements/Article'
import Img from '../elements/ResponsiveImg'
import MarkdownHeadings from '../elements/MarkdownHeadings'
import { TrvrslIcon } from '../elements/Icons'

const Section = styled.section({
  padding: '8rem 1rem 0',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#000',
})

const Logo = styled(TrvrslIcon)({
  marginBottom: '8rem',
})

const Title = styled.h1({
  fontSize: '3rem',
  fontWeight: 300,
})

const Paragraph = styled.p({
  fontSize: '2rem',
  fontWeight: 200,
})

const LineArt = styled(Img)({
  marginTop: '8rem',
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
  <Section id="hello">
    <Logo />
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
    <LineArt
      alt="trvrsl line art"
      src="/trvrsl-lineart.png"
      width={1440}
      height={788}
    />
  </Section>
)

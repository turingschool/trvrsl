// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import { MQ } from '../constants/styles'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import Article from '../elements/Article'
import Img from '../elements/ResponsiveImg'
import TextLinkBase from '../elements/TextLink'
import { EventLink as EventLinkBase, ScheduleLink } from '../elements/PillLink'

const Section = styled.section({
  paddingTop: '4rem',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#000',
  [MQ.MIN_BREAK_40]: {
    paddingTop: '8rem',
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

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title]),
  paragraph: Paragraph,
  root: Article,
})

const Actions = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '3rem',
  [MQ.MIN_BREAK_40]: {
    flexDirection: 'row',
  },
})

const EventLink = styled(EventLinkBase)({
  marginTop: '1rem',
  [MQ.MIN_BREAK_40]: {
    marginTop: 0,
    marginLeft: '1rem',
  },
})

const TextLink = styled(TextLinkBase)({
  marginTop: '2rem',
  [MQ.MIN_BREAK_40]: {
    marginTop: '4rem',
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

// -------------------------------------

type Props = {
  source: string,
}

export default (props: Props) => (
  <Section id="introduction">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
    <Actions>
      <ScheduleLink to="/#schedule">
        View Schedule
      </ScheduleLink>
      <EventLink to="/#event-information">
        Event Information
      </EventLink>
    </Actions>
    <TextLink to="/anti-harrassment-policy">
      Our Anti-Harrassment Policy
    </TextLink>
    <LineArt
      alt="trvrsl line art"
      src="/trvrsl-lineart.png"
      width="100%"
      height={788}
    />
  </Section>
)

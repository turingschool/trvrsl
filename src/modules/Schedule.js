// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import { compose, pure, withStateHandlers } from 'recompose'
import { EASE, MQ, SPEED } from '../constants/styles'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import BasePaddles from '../blocks/Paddles'
import Card from '../blocks/ScheduleCard'
import Article from '../elements/Article'
import BaseSection from '../elements/Section'
import Title from '../elements/Title'
import { CalendarIcon } from '../elements/Icons'

const Section = styled(BaseSection)({
  position: 'relative',
  maxWidth: '40rem',
  margin: '0 auto',
  textAlign: 'center',
  overflow: 'hidden',
})

const JibJab = styled(CalendarIcon)({
  marginTop: '2.5rem',
  [MQ.MIN_BREAK_40]: {
    marginTop: '4rem',
  },
})

const Paddles = styled(BasePaddles)({
  position: 'relative',
  zIndex: 2,
  transform: 'translateY(2rem)',
  [MQ.MIN_BREAK_40]: {
    transform: 'translateY(2.25rem)',
  },
})

const Cards = styled.div({
  display: 'flex',
  width: '100%',
  transition: `transform ${SPEED} ${EASE.IN_OUT}`,
})

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title]),
  root: Article,
})

// -------------------------------------

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  currentIndex: number,
  handleNext: () => void,
  handlePrev: () => void,
  cards: Array<string>,
  source: string,
}

const clamp = (min, max, num) => Math.min(Math.max(num, min), max)
const increment = props => props.currentIndex + 1
const decrement = props => props.currentIndex - 1
const hasNext = props => props.currentIndex < props.cards.length - 1
const hasPrev = props => props.currentIndex > 0

const getTransform = props => (
  props.currentIndex <= 0 ? 'none' : `translate3d(-${100 / props.cards.length}%, 0, 0)`
)

const withState = withStateHandlers(
  initProps => ({
    currentIndex: initProps.currentIndex || 0,
  }),
  {
    handleNext: (state, props) => () => ({
      currentIndex: clamp(0, props.cards.length - 1, increment(state)),
    }),
    handlePrev: (state, props) => () => ({
      currentIndex: clamp(0, props.cards.length - 1, decrement(state)),
    }),
  },
)

const Schedule = (props: Props) => (
  <Section id="schedule">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
    <JibJab />
    <Paddles
      handleNext={hasNext(props) ? props.handleNext : null}
      handlePrev={hasPrev(props) ? props.handlePrev : null}
    />
    <Cards css={{
      width: `${props.cards.length * 100}%`,
      transform: getTransform(props),
    }}
    >
      { props.cards.map(card => (
        <Card card={card} key={card} />
    ))}
    </Cards>
  </Section>
)

export default compose(withState, pure)(Schedule)

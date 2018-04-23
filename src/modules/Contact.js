// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import { compose, pure, withHandlers, withStateHandlers } from 'recompose'
import assignMarkdownHeadings from '../lib/assignMarkdownHeadings'
import InputControl from '../blocks/InputControl'
import Article from '../elements/Article'
import BaseSection from '../elements/Section'
import Form from '../elements/Form'
import Paragraph from '../elements/Paragraph'
import PillLink from '../elements/PillLink'
import Title from '../elements/Title'

const Section = styled(BaseSection)({
  color: '#fff',
  backgroundImage: 'linear-gradient(-180deg, #FF0092 1%, #D800FF 100%)',
})

const components = ({
  heading: props => assignMarkdownHeadings(props, [Title]),
  paragraph: Paragraph,
  root: Article,
})

const Actions = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
})

const PillButton = PillLink.withComponent('button')

// -------------------------------------

type Props = {
  emailAddress: string,
  fullName: string,
  question: string,
  handleChange: (e: SyntheticInputEvent<*>) => void,
  handleSubmit: (e: SyntheticInputEvent<*>) => void,
  source: string,
}

const initialState = {
  emailAddress: '',
  fullName: '',
  question: '',
}

const withStateUpdates = withStateHandlers(
  () => (initialState),
  {
    handleChange: () => e => ({
      [e.target.name]: e.target.value,
    }),
  },
)

const withEventHandlers = withHandlers({
  handleSubmit: props => (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log('handleSubmit', props)
  },
})

const Contact = (props: Props) => (
  <Section id="contact">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
    <Form
      acceptCharset="UTF-8"
      action="/contact"
      css={{ marginTop: '4rem' }}
      method="POST"
      onSubmit={props.handleSubmit}
    >
      <InputControl
        isRequired
        handleChange={props.handleChange}
        label="Email Address"
        name="emailAddress"
        type="email"
        placeholder="Enter your email address"
        value={props.emailAddress}
      />
      <InputControl
        handleChange={props.handleChange}
        label="Full Name"
        name="fullName"
        placeholder="Enter your full name"
        value={props.fullName}
      />
      <InputControl
        handleChange={props.handleChange}
        label="Question or Comment"
        name="question"
        placeholder="Ask a question or send us a comment"
        value={props.question}
      />
      <Actions>
        <PillButton onClick={props.handleSubmit}>Submit</PillButton>
      </Actions>
    </Form>
  </Section>
)

export default compose(withStateUpdates, withEventHandlers, pure)(Contact)

// @flow
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'react-emotion'
import { compose, pure, withStateHandlers } from 'recompose'
import { FORMS } from '../constants/en'
import { CONTACT_ACTION } from '../constants/networking'
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

const PillButton = PillLink.withComponent('input')

// -------------------------------------

type Props = {
  EMAIL: string,
  isFormValid: boolean,
  FULLNAME: string,
  handleChange: (e: SyntheticInputEvent<*>) => void,
  QUESTION: string,
  source: string,
}

let formElement = null
const initialState = {
  EMAIL: '',
  FULLNAME: '',
  isFormValid: false,
  QUESTION: '',
}

const selectForm = () => {
  if (typeof document === 'undefined') { return null }
  if (formElement === null) {
    formElement = document.body && document.body.querySelector(`form[action="${CONTACT_ACTION}"]`)
  }
  return formElement
}

const getIsFormValid = () => {
  const form = selectForm()
  // $FlowFixMe - Flow thinks `form` is an `HTMLElement` instead of `HTMLFormElement`
  return form != null ? form.checkValidity() : false
}

const withStateUpdates = withStateHandlers(
  () => (initialState),
  {
    handleChange: () => e => ({
      [e.target.name]: e.target.value,
      isFormValid: getIsFormValid(),
    }),
  },
)

const Contact = (props: Props) => (
  <Section id="contact">
    <ReactMarkdown
      renderers={components}
      source={props.source}
    />
    <Form
      action={CONTACT_ACTION}
      className="validate"
      css={{ marginTop: '4rem' }}
      id="mc-embedded-subscribe-form"
      method="post"
      name="mc-embedded-subscribe-form"
      novalidate
      target="_blank"
    >
      <InputControl
        isRequired
        handleChange={props.handleChange}
        label={FORMS.EMAIL_LABEL}
        name="EMAIL"
        type="email"
        placeholder={FORMS.EMAIL_PLACEHOLDER}
        value={props.EMAIL}
      />
      <InputControl
        handleChange={props.handleChange}
        label={FORMS.NAME_LABEL}
        name="FULLNAME"
        placeholder={FORMS.NAME_PLACEHOLDER}
        value={props.FULLNAME}
      />
      <InputControl
        handleChange={props.handleChange}
        label={FORMS.QUESTION_LABEL}
        name="QUESTION"
        placeholder={FORMS.QUESTION_PLACEHOLDER}
        value={props.QUESTION}
      />
      <div id="mce-responses">
        <div className="response" id="mce-error-response" style={{ display: 'none' }} />
        <div className="response" id="mce-success-response" style={{ display: 'none' }} />
      </div>
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true" >
        <input type="text" name="b_8080b7a05247f0dee13a0a26f_8979d4869b" tabIndex="-1" value="" />
      </div>
      <Actions>
        <PillButton
          css={{
            color: '#fff',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            '.no-touch &:hover': { backgroundColor: '#0091ff' },
          }}
          type="submit"
          value={FORMS.SUBMIT_BUTTON_TEXT}
          name="subscribe"
          id="mc-embedded-subscribe"
          disabled={!props.isFormValid}
        />
      </Actions>
    </Form>
  </Section>
)

export default compose(withStateUpdates, pure)(Contact)

// @flow
import { ASSET_PATH } from './networking'

export default undefined

export const FORMS = Object.freeze({
  EMAIL_LABEL: 'Email Address',
  EMAIL_PLACEHOLDER: 'Enter your email address',
  NAME_LABEL: 'Full Name',
  NAME_PLACEHOLDER: 'Enter your full name',
  QUESTION_LABEL: 'Question or Comment',
  QUESTION_PLACEHOLDER: 'Ask a question or send us a comment',
  SUBMIT_BUTTON_TEXT: 'Submit',
})

export const META = Object.freeze({
  DESCRIPTION: 'trvrsl description',
  FAVICON: `${ASSET_PATH}/favicon.ico`,
  ICON: `${ASSET_PATH}/favicon.svg`,
  IMAGE: `${ASSET_PATH}/apple-touch-icon.png`,
  MANIFEST: `${ASSET_PATH}/manifest.json`,
  NAME: 'trvrsl name',
  TITLE: 'trvrsl title',
  URL: 'https://turingschool.github.io/trvrsl',
})

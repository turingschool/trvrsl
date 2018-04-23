// @flow
import styled from 'react-emotion'
import { EASE, SPEED } from '../constants/styles'

export default styled.span({
  paddingTop: '0.5rem',
  alignSelf: 'flex-end',
  fontSize: '0.8125rem',
  opacity: 0,
  transform: 'translate3d(-3rem, 0, 0)',
  transition: `transform ${SPEED} ${EASE.IN_OUT}, opacity ${SPEED}`,
  'input:focus + &': {
    transform: 'none',
    opacity: 1,
  },
})

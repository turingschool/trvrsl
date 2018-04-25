// @flow
import styled from 'react-emotion'
import { SPEED } from '../constants/styles'

export default styled.input({
  width: '100%',
  margin: 0,
  padding: '1rem',
  fontFamily: 'inherit',
  fontSize: '0.875rem',
  fontWeight: 400,
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  borderBottom: '1px solid',
  outline: 'none',
  transition: `color ${SPEED} font-size ${SPEED}`,
  '::placeholder': {
    color: '#fff',
    transition: `color ${SPEED}`,
  },
  'html:not(.no-touch) &:focus': {
    fontSize: '1rem',
  },
  '&:focus::placeholder': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
})

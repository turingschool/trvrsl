// @flow
import styled from 'react-emotion'
import { MQ } from '../constants/styles'

export default styled.h1({
  fontSize: '2.5rem',
  fontWeight: 200,
  [MQ.MIN_BREAK_40]: {
    fontSize: '3rem',
  },
})

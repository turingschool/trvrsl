// @flow
import styled from 'react-emotion'
import { MQ } from '../constants/styles'

export default styled.h2({
  fontSize: '1.5rem',
  fontWeight: 400,
  [MQ.MIN_BREAK_40]: {
    fontSize: '2rem',
  },
})

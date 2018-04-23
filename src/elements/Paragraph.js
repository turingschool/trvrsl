// @flow
import styled from 'react-emotion'
import { MQ } from '../constants/styles'

export default styled.p({
  fontSize: '0.875rem',
  [MQ.MIN_BREAK_40]: {
    fontSize: '1rem',
  },
})

// @flow
import styled from 'react-emotion'
import { MQ } from '../constants/styles'

export default styled.section({
  padding: '4rem 1rem',
  backgroundColor: '#fff',
  [MQ.MIN_BREAK_40]: {
    padding: '8rem 1rem',
  },
})

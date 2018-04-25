// @flow
import styled from 'react-emotion'
import { NavLink } from 'react-static'
import { SPEED } from '../constants/styles'

export default styled(NavLink)({
  display: 'inline-block',
  fontSize: '0.875rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: '#767676',
  transition: `color ${SPEED}`,
  '.no-touch &:hover': {
    color: '#fff',
  },
})


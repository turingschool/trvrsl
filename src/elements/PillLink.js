// @flow
import styled from 'react-emotion'
import { NavLink } from 'react-static'
import { SPEED } from '../constants/styles'

const PillLink = styled(NavLink)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 700,
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  textDecoration: 'none',
  minWidth: 192,
  height: 44,
  border: '1px solid',
  borderRadius: '0.5rem',
  transition: `opacity ${SPEED}`,
  '&[disabled]': {
    pointerEvents: 'none',
    opacity: 0.5,
  },
})

export default PillLink

const funkyBorder = {
  color: '#bfbdbd',
  backgroundClip: 'content-box, border-box',
  backgroundColor: 'transparent',
  backgroundOrigin: 'border-box',
  borderColor: 'transparent',
}

export const ScheduleLink = styled(PillLink)({
  ...funkyBorder,
  backgroundImage: 'linear-gradient(#000, #000), linear-gradient(90deg, #d800ff, #ff0092)',
})

export const EventLink = styled(PillLink)({
  ...funkyBorder,
  backgroundImage: 'linear-gradient(#000, #000), linear-gradient(90deg, #0091ff, #00faff)',
})

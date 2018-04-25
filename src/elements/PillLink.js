// @flow
import styled from 'react-emotion'
import { NavLink } from 'react-static'
import { SPEED } from '../constants/styles'

export const pillStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 700,
  fontSize: '0.875rem',
  textDecoration: 'none',
  textTransform: 'uppercase',
  minWidth: 192,
  height: 44,
  border: '1px solid',
  borderRadius: '0.5rem',
  transition: `color ${SPEED}, opacity ${SPEED}, background-color ${SPEED}`,
  '&[disabled]': {
    pointerEvents: 'none',
    opacity: 0.5,
  },
}

const PillLink = styled(NavLink)({
  ...pillStyle,
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
  '.no-touch &:hover': {
    color: '#d800ff',
  },
})

export const EventLink = styled(PillLink)({
  ...funkyBorder,
  backgroundImage: 'linear-gradient(#000, #000), linear-gradient(90deg, #0091ff, #00faff)',
  '.no-touch &:hover': {
    color: '#0091ff',
  },
})

// @flow
import styled from 'react-emotion'
import { EASE, SPEED } from '../constants/styles'

export default undefined

const openedNav = {
  backgroundColor: 'magenta',
}

const closedNav = {
  backgroundColor: 'transparent',
  pointerEvents: 'none',
}

export const Nav = styled.nav(
  {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    transition: `background-color ${SPEED}`,
  },
  props => ({
    ...(props.isOpen ? openedNav : closedNav),
  }),
)

// -------------------------------------

export const Toggle = styled.button({
  position: 'absolute',
  top: 0,
  left: 0,
  pointerEvents: 'auto',
})

// -------------------------------------

const openedNavLinks = {
  transform: 'translate3d(0, 96px, 0)',
  transitionDelay: '0.1s',
  opacity: 1,
}

const closedNavLinks = {
  transform: 'translate3d(0, 100%, 0)',
  opacity: 0,
}

export const NavLinks = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    transition: `transform ${SPEED} ${EASE.IN_OUT}, opacity ${SPEED}`,
  },
  props => ({
    ...(props.isOpen ? openedNavLinks : closedNavLinks),
  }),
)

export const NavLink = styled.a({
})


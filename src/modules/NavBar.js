// @flow
import React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'
import { withRouteData } from 'react-static'
import { Gradient, LogoType, Nav, NavLinks, NavLink, Toggle } from '../elements/NavBarElements'
import { MenuIcon, XIcon } from '../elements/Icons'

const toggleBody = async (flag) => {
  if (document.body != null && document.body.classList != null) {
    const fn = flag === true ? 'add' : 'remove'
    // $FlowFixMe - Flow doesn't appreciate the meta fn
    await document.body.classList[fn]('scrollIsDisabled')
  }
}

const withState = withStateHandlers(
  () => ({
    isOpen: false,
  }),
  {
    handleAnchorClick: () => () => {
      toggleBody(false)
      return { isOpen: false }
    },
    handleToggle: props => () => {
      const isOpen = !props.isOpen
      toggleBody(isOpen)
      return { isOpen }
    },
  },
)

type Props = {
  isOpen: boolean,
  isHome: boolean,
  handleAnchorClick: () => void,
  handleToggle: () => void,
}

const NavBar = (props: Props) => (
  <Nav isHome={props.isHome} isOpen={props.isOpen}>
    <Toggle isOpen={props.isOpen} onClick={props.handleToggle}>
      { props.isOpen ? <XIcon /> : <MenuIcon /> }
    </Toggle>
    { !props.isHome && <LogoType /> }
    <NavLinks isOpen={props.isOpen}>
      <NavLink onClick={props.handleAnchorClick} to="/">Introduction</NavLink>
      <NavLink onClick={props.handleAnchorClick} to="/#schedule">Schedule</NavLink>
      <NavLink onClick={props.handleAnchorClick} to="/#attendees">Attendees</NavLink>
      <NavLink onClick={props.handleAnchorClick} to="/#location">Location</NavLink>
      <NavLink onClick={props.handleAnchorClick} to="/#speakers">Speakers</NavLink>
      <NavLink onClick={props.handleAnchorClick} to="/#contact">Contact</NavLink>
      <NavLink onClick={props.handleAnchorClick} to="/anti-harrassment-policy">Anit-Harrassment Policy</NavLink>
    </NavLinks>
    <Gradient isOpen={props.isOpen} />
  </Nav>
)

export default compose(withRouteData, withState, pure)(NavBar)

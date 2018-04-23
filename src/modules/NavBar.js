// @flow
import React from 'react'
import { scrollTo } from 'react-static'
import { compose, pure, withStateHandlers } from 'recompose'
import { Gradient, Nav, NavLinks, NavLink, Toggle } from '../elements/NavBarElements'
import { MenuIcon, XIcon } from '../elements/Icons'

const getHref = target => (
  target && target.getAttribute('href').slice(1)
)

const scrollToHref = async (href) => {
  const element = document.getElementById(href)
  await scrollTo(element, { duration: 400 })
}

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
    handleAnchorClick: () => (e) => {
      const href = getHref(e.target)
      if (href) {
        toggleBody(false)
        scrollToHref(href)
      }
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
  handleAnchorClick: () => void,
  handleToggle: () => void,
}

const NavBar = (props: Props) => (
  <Nav isOpen={props.isOpen}>
    <Toggle isOpen={props.isOpen} onClick={props.handleToggle}>
      { props.isOpen ? <XIcon /> : <MenuIcon /> }
    </Toggle>
    <NavLinks isOpen={props.isOpen}>
      <NavLink onClick={props.handleAnchorClick} href="#introduction">Introduction</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#schedule">Schedule</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#attendees">Attendees</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#location">Location</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#speakers">Speakers</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#contact">Contact</NavLink>
    </NavLinks>
    <Gradient isOpen={props.isOpen} />
  </Nav>
)

export default compose(withState, pure)(NavBar)

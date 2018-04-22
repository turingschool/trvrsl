// @flow
import React from 'react'
import { scrollTo } from 'react-static'
import { compose, pure, withStateHandlers } from 'recompose'
import { Nav, NavLinks, NavLink, Toggle } from '../elements/NavBarElements'

const getHref = target => (
  target && target.getAttribute('href').slice(1)
)

const scrollToHref = async (href) => {
  const element = document.getElementById(href)
  await scrollTo(element, { duration: 400 })
}

const withState = withStateHandlers(
  () => ({
    isOpen: false,
  }),
  {
    handleAnchorClick: () => (e) => {
      const href = getHref(e.target)
      if (href) {
        scrollToHref(href)
      }
      return {
        isOpen: false,
      }
    },
    handleToggle: props => () => ({
      isOpen: !props.isOpen,
    }),
  },
)

type Props = {
  isOpen: boolean,
  handleAnchorClick: () => void,
  handleToggle: () => void,
}

const NavBar = (props: Props) => (
  <Nav isOpen={props.isOpen}>
    <Toggle onClick={props.handleToggle}>Navigation</Toggle>
    <NavLinks isOpen={props.isOpen}>
      <NavLink onClick={props.handleAnchorClick} href="#hello">Hello</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#schedule">Schedule</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#attendees">Attendees</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#location">Location</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#speakers">Speakers</NavLink>
      <NavLink onClick={props.handleAnchorClick} href="#contact">Contact</NavLink>
    </NavLinks>
  </Nav>
)

export default compose(withState, pure)(NavBar)

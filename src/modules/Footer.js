// @flow
import React from 'react'
import styled from 'react-emotion'
import { NavLink } from 'react-static'
import { MQ } from '../constants/styles'
import { LogoShape } from '../elements/Icons'

const Footer = styled.footer({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '58rem',
  margin: '0 auto',
  color: '#4a4a4a',
  backgroundColor: '#fff',
  padding: '4rem 1rem',
  [MQ.MIN_BREAK_40]: {
    padding: '8rem 1rem',
  },
})

const Logo = styled(LogoShape)({
  marginRight: '2rem',
  maxWidth: 164,
})

const Copy = styled.p({
  margin: 0,
})

// -------------------------------------

type Props = {
}

export default (props: Props) => (
  <Footer {...props}>
    <NavLink to="/">
      <Logo />
    </NavLink>
    <Copy>
      <span>Copyright <small>&copy;</small> TRVRSL</span>
      <span> {new Date().getFullYear()}</span>.
      <span> All Rights Reserved</span>
    </Copy>
  </Footer>
)

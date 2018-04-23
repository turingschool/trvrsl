// @flow
import React from 'react'
import styled from 'react-emotion'
import { NavLink } from 'react-static'
import { TrvrslFooterIcon } from '../elements/Icons'

const Footer = styled.footer({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '58rem',
  minHeight: '7rem',
  margin: '0 auto',
  color: '#4a4a4a',
  backgroundColor: '#fff',
})

const Logo = styled(TrvrslFooterIcon)({
  marginRight: '2rem',
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

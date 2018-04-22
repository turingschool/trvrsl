// @flow
import React from 'react'
import styled from 'react-emotion'
import { NavLink } from 'react-static'
import { TrvrslFooterIcon } from '../elements/Icons'

const Footer = styled.footer({
  display: 'flex',
  alignItems: 'center',
  minHeight: 88,
  backgroundColor: '#fff',
})

const Logo = styled(TrvrslFooterIcon)({
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
      Copyright <small>&copy;</small> TRVRSL 2018. All Rights Reserved
    </Copy>
  </Footer>
)

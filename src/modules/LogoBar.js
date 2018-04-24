// @flow
import React from 'react'
import styled from 'react-emotion'
import { withRouteData } from 'react-static'
import { compose, pure } from 'recompose'
import { MQ, Z } from '../constants/styles'
import { Logo } from '../elements/Icons'

// 😬
const stickyBar = {
  position: 'sticky',
  top: '-13.25rem',
  paddingTop: '4rem',
  paddingBottom: '1.5rem',
  [MQ.MIN_BREAK_40]: {
    top: '-17.25rem',
    paddingTop: '8rem',
  },
}

const fixedBar = ({
  position: 'fixed',
  top: 0,
  height: '5.75rem',
  '> *': {
    // 😳
    transform: 'translateY(-9.25rem)',
  },
})

const Bar = styled.div(
  {
    left: 0,
    right: 0,
    zIndex: Z.LOGOBAR,
    textAlign: 'center',
    backgroundColor: '#000',
  },
  props => ({
    ...(props.isHome ? stickyBar : fixedBar),
  }),
)

// -------------------------------------

type Props = {
  isHome: boolean,
}

const LogoBar = (props: Props) => (
  <Bar {...props}>
    <Logo />
  </Bar>
)

export default compose(withRouteData, pure)(LogoBar)

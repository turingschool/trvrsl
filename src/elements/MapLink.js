// @flow
import React from 'react'
import styled from 'react-emotion'
import { MapIcon } from './Icons'

const Link = styled.a({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.875rem',
  fontWeight: 700,
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: '#0091ff',
})

const Span = styled.span({
  paddingTop: '2rem',
})

type Props = {
  children: Node | number | string,
}
export default ({ children, ...props }: Props) => (
  <Link target="_blank" {...props}>
    <MapIcon />
    <Span>{children}</Span>
  </Link>
)

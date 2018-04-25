// @flow
import React from 'react'
import styled from 'react-emotion'
import { MapIcon } from './Icons'
import { pillStyle } from '../elements/PillLink'

// 🐲
const Link = styled.a({
  display: 'flex',
  color: '#0091ff',
  'ul:first-of-type &': {
    ...pillStyle,
  },
  'ul:first-of-type & > svg': {
    display: 'none',
  },
  'ul:first-of-type & > span': {
    paddingTop: '0 !important',
  },
  'h2 ~ ul &': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.875rem',
    fontWeight: 700,
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
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

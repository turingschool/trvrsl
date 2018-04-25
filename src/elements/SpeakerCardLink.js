// @flow
import React, { type Node } from 'react'
import styled from 'react-emotion'
import { SPEED } from '../constants/styles'
import { TwitterIcon } from './Icons'

const isTwitter = href => (/twitter/gi).test(href)

const Link = styled.a({
  color: '#048bfa',
  transition: `color ${SPEED}`,
  textDecoration: 'none',
  'p > & > svg': {
    display: 'none',
  },
  'li > & > span': {
    display: 'none',
  },
  '.no-touch &:hover': {
    color: '#ff0092',
  },
})

type Props = {
  children: Node,
  href: string,
}

export default ({ children, href, ...props }: Props) => (
  <Link href={href} target="_blank" {...props}>
    { isTwitter(href) === true && <TwitterIcon /> }
    <span>{ children }</span>
  </Link>
)

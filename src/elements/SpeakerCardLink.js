// @flow
import React from 'react'
import styled from 'react-emotion'
import { TwitterIcon } from './Icons'

const isTwitter = href => (
  (/twitter/gi).test(href)
)

const isNotSocial = href => (
  !isTwitter(href)
)

const Link = styled.a({
})

type Props = {
  children: Node | number | string,
  href: string,
}

export default ({ children, href, ...props }: Props) => (
  <Link href={href} target="_blank" {...props}>
    { isTwitter(href) === true && <TwitterIcon /> }
    { isNotSocial(href) === true && children }
  </Link>
)

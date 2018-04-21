// @flow
import React from 'react'
import Markdown from 'react-markdown'
import { Section } from '../elements/Contact'

type Props = {
  source: string,
}

export default (props: Props) => (
  <Section id="contact">
    <Markdown source={props.source} />
  </Section>
)

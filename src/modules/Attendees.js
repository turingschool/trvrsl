// @flow
import React from 'react'
import Markdown from 'react-markdown'
import { Section } from '../elements/Attendees'

type Props = {
  source: string,
}

export default (props: Props) => (
  <Section id="attendees">
    <Markdown source={props.source} />
  </Section>
)

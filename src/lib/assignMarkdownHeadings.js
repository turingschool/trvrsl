// @flow
import React, { type ComponentType } from 'react'
import { renderers } from 'react-markdown'

type Props = {
  children: Node,
  level: number,
}
export default (props: Props, headings: Array<ComponentType<*>>) => {
  const component = headings[props.level - 1] || renderers.heading
  return React.createElement(component, props, props.children)
}

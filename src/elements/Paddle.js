// @flow
import React from 'react'
import styled from 'react-emotion'
import { ArrowIcon } from '../elements/Icons'

const getTransform = (props) => {
  switch (props.direction) {
    case 'north': return 'rotate(-90deg)'
    case 'south': return 'rotate(90deg)'
    case 'west': return 'rotate(180deg)'
    default: return 'none'
  }
}

const Button = styled.button({
})

const Icon = styled(ArrowIcon)(
  {},
  props => ({
    transform: getTransform(props),
  }),
)

type Props = {
  direction?: 'north' | 'south' | 'east' | 'west',
  onClick: (e: Event) => void,
}

const Paddle = ({ direction, onClick, ...props }: Props) => (
  <Button role="button" onClick={onClick} {...props} >
    <Icon direction={direction} />
  </Button>
)

Paddle.defaultProps = {
  direction: 'east',
}

export default Paddle

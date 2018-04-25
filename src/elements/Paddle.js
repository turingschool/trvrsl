// @flow
import React from 'react'
import styled from 'react-emotion'
import { EASE, SPEED } from '../constants/styles'
import { ArrowIcon } from '../elements/Icons'

const getHover = (props) => {
  switch (props.direction) {
    case 'north': return 'translate3d(0, 0, 0)'
    case 'south': return 'translate3d(0, 0, 0)'
    case 'west': return 'translate3d(-1rem, 0, 0)'
    default: return 'translate3d(1rem, 0, 0)'
  }
}

const getIconRotation = (props) => {
  switch (props.direction) {
    case 'north': return 'rotate(-90deg)'
    case 'south': return 'rotate(90deg)'
    case 'west': return 'rotate(180deg)'
    default: return 'rotate(0deg)'
  }
}

const Button = styled.button({
})

const Icon = styled(ArrowIcon)(
  {
    transition: `transform ${SPEED} ${EASE.IN_OUT}`,
  },
  props => ({
    transform: getIconRotation(props),
    '.no-touch :hover > &': {
      transform: `${getHover(props)} ${getIconRotation(props)}`,
    },
  }),
)

type Props = {
  direction?: 'north' | 'south' | 'east' | 'west',
  title: string,
  onClick: (e: Event) => void,
}

const Paddle = ({ direction, title, onClick, ...props }: Props) => (
  <Button role="button" onClick={onClick} {...props} >
    <Icon direction={direction} title={title} />
  </Button>
)

Paddle.defaultProps = {
  direction: 'east',
}

export default Paddle

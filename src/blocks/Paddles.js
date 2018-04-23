// @flow
import React from 'react'
import styled from 'react-emotion'
import Paddle from '../elements/Paddle'

const Paddles = styled.nav({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

// -------------------------------------

type Props = {
  handleNext: ?() => void,
  handlePrev: ?() => void,
}

export default ({ handlePrev, handleNext, ...props }: Props) => (
  <Paddles {...props} >
    {handlePrev != null ?
      <Paddle direction="west" onClick={handlePrev} /> : <span>&nbsp;</span>
    }
    {handleNext != null &&
      <Paddle onClick={handleNext} />
    }
  </Paddles>
)

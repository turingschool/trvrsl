// @flow
import React from 'react'
import styled from 'react-emotion'
import Img from '../elements/ResponsiveImg'

const Section = styled.section({
  '&::after': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '2rem',
    backgroundImage: 'linear-gradient(-90deg, #ff0092 0%, #d800ff 100%)',
  },
})

const Photo = styled(Img)({
  display: 'block',
  maxHeight: 480,
})

// -------------------------------------

type Props = {
  alt: ?string,
  source: string,
}

export default (props: Props) => (
  <Section id="peops">
    <Photo
      alt={props.alt != null ? props.alt : props.source}
      src={props.source}
      width="100%"
      height={480}
    />
  </Section>
)

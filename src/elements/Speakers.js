// @flow
import styled from 'react-emotion'

export default undefined

export const Header = styled.header({
  margin: '0 auto',
  maxWidth: '80rem',
  textAlign: 'center',
})

export const Section = styled.section({
  paddingTop: 32,
  paddingBottom: 32,
  backgroundColor: '#eee',
})

export const Title = styled.h1({
  fontSize: 32,
  color: 'magenta',
})

export const Cards = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(304px, 1fr))',
  gridGap: 16,
  maxWidth: '80rem',
  margin: '0 auto',
  paddingLeft: 16,
  paddingRight: 16,
})

export const Card = styled.div({
  outline: '1px dotted blue',
})

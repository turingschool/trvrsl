// @flow
import styled from 'react-emotion'
import { TrvrslIcon } from '../elements/Icons'

export default undefined

export const Section = styled.section({
  minHeight: '100vh',
  paddingTop: 32,
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#000',
})

export const Logo = styled(TrvrslIcon)({
  marginTop: 64,
})

export const Article = styled.article({
  marginTop: 128,
})

export const Title = styled.h1({
  fontSize: 32,
})

export const LineArt = styled.img({
  marginTop: 208,
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'cover',
})

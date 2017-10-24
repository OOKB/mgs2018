import styled from 'styled-components'
import colors from '../../util'

export const Wrapper = styled.div`
  margin: 6rem 0;
  border-top: 1px solid black;
`
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
`
export const Chunk = styled.section`
  display: flex;
  flex-direction: ${props => props.columns ? 'column' : 'row' };
`

export const MicaLogo = styled.img`
  max-width: 12rem;
`

export const Atag = styled.a`
  font-size: 1em;
  color: ${colors.alt.green};
  text-decoration: underline;
`

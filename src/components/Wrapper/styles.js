import styled from 'styled-components'
import { sizes } from '../../util'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 88rem;
  margin: 0 auto;
  padding: 0 2rem;
  @media (min-width: ${sizes.medium}) {
    padding: 0 3.5rem;
  }
`

export const LogoWrapper = styled.div`
  position: relative;
  margin: ${props => (props.top ? '1.5rem 0' : '-4rem 0')};
`

export const MicaLogo = styled.div`
  position: absolute;
  z-index: 100;
  right: 1.5rem;
  svg path, svg polygon, svg polyline {
    transition: .25s;
    fill: ${props => props.theme.color};
  }
`

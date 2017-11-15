import styled from 'styled-components'
import { sizes } from '../../util'

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 88rem;
  margin: 0 auto;
  @media (min-width: ${sizes.medium}) {
    padding: 0 2rem;
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
    fill: ${props => props.theme.color };
  }
`

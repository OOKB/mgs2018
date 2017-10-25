import styled from 'styled-components'

export const LogoEl = styled.img`
  position: absolute;
  z-index: 100;
  top: 1rem;
  left: ${props => (props.primary ? '0' : '')};
  right: ${props => (props.primary ? '' : '0')};
  max-width: ${props => (props.primary ? '20rem' : '8rem')};
`

import styled from 'styled-components'
import { sizes } from '../../util'

export const LogoEl = styled.object`
  position: absolute;
  z-index: 100;
  left: ${props => (props.primary ? '1.5rem' : '')};
  right: ${props => (props.primary ? '' : '1.5rem')};
  max-width: ${props => (props.primary ? '11rem' : '8rem')};

  @media (min-width: ${sizes.medium}) {
    max-width: ${props => (props.primary ? '20rem' : '8rem')};
  }
`

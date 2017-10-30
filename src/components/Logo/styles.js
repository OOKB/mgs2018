import styled from 'styled-components'
import { sizes } from '../../util'

export const LogoEl = styled.object`
  position: absolute;
  z-index: 100;
  left: ${props => (props.left ? '1.5rem' : '')};
  right: ${props => (props.right ? '1.5rem' : '')};
  max-height: ${props => (props.primary ? '5rem' : '1.5rem')};

  @media (min-width: ${sizes.medium}) {
    max-height: ${props => (props.primary ? '9rem' : '1.5rem')};
  }
`

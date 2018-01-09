import styled from 'styled-components'
import { sizes } from '../../util'

export const LogoEl = styled.object`
  position: ${props => (props.fixed ? 'fixed' : 'absolute')};
  position: ${props => (props.sttc ? 'static' : 'absolute')};
  z-index: ${props => (props.left ? '100' : '45')};
  left: ${props => (props.left ? '1.5rem' : '')};
  right: ${props => (props.right ? '1.5rem' : '')};
  max-height: ${props => (props.primary ? '3.5rem' : '1.5rem')};
  @media (min-width: ${sizes.small}) {
    max-height: ${props => (props.primary ? '5rem' : '1.5rem')};
  }
  @media (min-width: ${sizes.medium}) {
    max-height: ${props => (props.primary ? '9rem' : '1.5rem')};
  }
`

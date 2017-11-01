import styled from 'styled-components'
import { sizes } from '../../util'

export const Wrapper = styled.div`
  height: 0px;
  top: 2rem;
  padding-top: 90%;
  position: relative;
  margin: 0 0.75rem;
  @media (min-width: ${sizes.medium}) {
    padding-top: 55%;
  }
`

export const Image = styled.img`
  max-width: 60%;
  max-height: 90%;
  width: ${props => (props.wide ? '100%' : 'auto')};
  height: ${props => (props.tall ? '100%' : 'auto')};
  position: absolute;
  top: 10px;
  &:hover {
    z-index: 50;
  }
`

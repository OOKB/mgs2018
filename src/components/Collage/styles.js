import styled from 'styled-components'
import { sizes, colors } from '../../util'

export const Wrapper = styled.div`
  height: 0px;
  top: 2rem;
  padding-top: 90%;
  position: relative;
  margin: 0 0.75rem;
  @media (min-width: ${sizes.medium}) {
    padding-top: 50%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const ImageWrapper = styled.div`
  max-width: 60%;
  max-height: 90%;
  position: absolute;
  top: 10px;
  z-index: ${props => props.z};
  &:hover {
    z-index: 50;
    div {
      transform: translateY(95%) scaleY(1);
      p {
        opacity: 1;
      }
    }
  }
`
export const Caption = styled.div`
  transition: .25s;
  width: 100%;
  margin: 0;
  padding: .5rem 1rem;
  background: ${colors.white};
  border: 2px solid ${props => props.theme.color};
  bottom: 0;
  position: absolute;
  transform-origin: top center;
  transform: translateY(95%) scaleY(0);
`

export const CaptionItem = styled.p`
  opacity 0;
  transition: .25s .125s;
  color: ${props => props.theme.color};
  font-weight: ${props => (props.bold ? '800' : '400')};
  text-transform: ${props => (props.caps ? 'uppercase' : '')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  margin: .5rem 0;
`

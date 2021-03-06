import styled from 'styled-components'
import { sizes, colors } from '../../util'

export const Wrapper = styled.div`
  height: 0px;
  top: 2rem;
  padding-top: 90%;
  position: relative;
  margin: 0;
  @media (min-width: ${sizes.medium}) {
    padding-top: 50%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const ImageWrapper = styled.div`
  max-width: 50%;
  max-height: 90%;
  position: absolute;
  top: 10px;
  z-index: ${props => props.z};
  a { border: none;}
  &:hover {
    z-index: 50;
    div {
      transform: translateY(50%) translateX(-3rem) scaleY(1);
      p {
        opacity: 1;
      }
    }
  }
`
export const Caption = styled.div`
  display: ${props => (props.flex ? 'flex' : 'block')};
  align-items: center;
  transition: .25s;
  width: ${props => (props.flex ? 'auto' : '100%')};
  margin: 0;
  padding: .5rem .5rem;
  background: ${colors.white};
  border: 2px solid ${props => props.theme.color};
  bottom: 50%;
  position: absolute;
  transform-origin: top center;
  transform: translateY(50%) translateX(-3rem) scale(0);
  section {
    margin: 0 .5rem;
    svg, img, svg path, svg polygon, svg polyline {
      transition: .25s;
      fill: ${props => props.theme.color} !important;
    }
  }
  &:hover {
    cursor: pointer;
    section { opacity: .5; }
  }
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
export const Refresh = styled.button`
  color: ${props => props.theme.color};
  text-decoration: underline;
  margin-left: 1.5rem;
  cursor: pointer;
  &:hover {
    opacity: .5;
  }
  span { text-decoration: underline; }
`
export const TestWrap = styled.div`
  padding: 0 0 400px;
  margin: 5rem 0 0;
  @media (min-width: ${sizes.medium}) {
    padding: 0 0 600px;
    margin: 8rem 0 0;
  }
`
export const Test = styled.div`
  height: 400px;
  position: absolute;
  left: 0;
  right: 0;
  @media (min-width: ${sizes.medium}) {
    height: 600px;
  }
`
export const ImageTest = styled.img`
  max-height: 400px;
  @media (min-width: ${sizes.medium}) {
    max-height: 600px;
  }
`
export const PlaceholderWrapper = styled.div`
  opacity: ${props => (props.loading ? 1 : 0)};
  transition: opacity 0.5s;
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  div {
    width: 100%;
    height: 66%;
    background: #eee;
    &:nth-child(even) {
      width: 300%;
      height: 100%;
      margin: 0 3rem;
    }
  }
  position: absolute;
`

export const SliderWrapper = styled.div`
  opacity: ${props => (props.loading ? 0 : 1)};
  transition: opacity 2s;
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-slide {
    height: 100%;
    width: auto;
    max-width: 80vw;
    &:hover {
      div {
        transform: translateY(50%) translateX(-3rem) scale(1);
        p {
          opacity: 1;
        }
      }
    }
  }
`
export const Loading = styled.p`
  opacity: ${props => (props.loading ? 1 : 0)};
  transition: opacity 2s;
  position: absolute;
  left: 50%;
  top: 50%;
  height: initial !important;
  min-height: initial !important;
  color: ${props => props.theme.color};
`

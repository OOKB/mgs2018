import styled from 'styled-components'

import { colors, sizes } from '../../util'

export const ImageContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  flex: 2;
  .image-stack { display: none; }
  @media (min-width: ${sizes.medium}) {
    margin-top: 4.5rem;
    .image-stack { display: block; }
    .image-header-mobile { display: none; }
  }
`
export const InfoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  flex: 2;
  @media (min-width: ${sizes.medium}) {
    margin-top: 4.5rem;
    padding-left: 3rem;
    .image-stack-mobile { display: none; }
  }
  @media (min-width: ${sizes.large}) {
    flex: 1;
  }
`
export const Box = styled.div`
  height: 0;
  width: 100%;
  padding-bottom: 50%;
  background: ${props => props.theme.color};
  @media (min-width: ${sizes.medium}) {
    padding-bottom: 100%;
  }
`
export const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.25rem;
  font-size: 2.25rem;
  font-weight: 600;
`
export const Divider = styled.hr`
  margin: 1.5rem 0;
`
export const Subtitle = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.color};
  text-transform: uppercase;
  letter-spacing: 0.02em;
`
export const Description = styled.p`
  margin: 0;
  margin-top: 1rem;
`
export const Social = styled.div`
  a {
    &:hover {
      opacity: .5;
    }
  }
`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${sizes.medium}) {
    flex-direction: row;
  }
`
export const ShowTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.color};
  text-decoration: underline;
  &:hover {
    opacity: .5;
  }
`
export const Back = styled.button`
  height: 5rem;
  width: 13rem;
  background: transparent;
  border: none;
  position: fixed;
  z-index: 1;

  > * {
    pointer-events: none;
    position: static;
  }

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media (min-width: ${sizes.medium}) {
    height: 6rem;
    width: 16rem;
  }
`
export const Loading = styled.p`
  color: ${props => props.theme.color};
`
export const Caption = styled.div`
  display: ${props => (props.flex ? 'flex' : 'block')};
  align-items: center;
  transition: .25s;
  width: ${props => (props.flex ? 'auto' : '100%')};;
  margin: 0;
  padding: .5rem .5rem;
  background: ${colors.white};
  border: 2px solid ${props => props.theme.color};
  bottom: 0;
  position: absolute;
  transform-origin: top center;
  transform: translateY(50%) translateX(-3rem) scaleY(0);
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

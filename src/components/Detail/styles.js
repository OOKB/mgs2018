import styled from 'styled-components'
import { sizes } from '../../util'

export const InfoContainer = styled.div`
  position: relative;
  flex: 1;
  padding-top: 3rem;
  @media (min-width: ${sizes.medium}) {
    padding-top: 0;
    padding-left: 3rem;
  }
`

export const MapContainer = styled.div`
  height: 0;
  padding-bottom: 100%;
  width: auto;
`

export const MapWrapper = styled.div`
  flex: 2 !important;
`

export const MarkerWrapper = styled.div`
  svg, img, svg path, svg polygon, svg polyline {
    transition: .25s;
    fill: ${props => props.theme.color} !important;
  }
`

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.25rem;
  font-size: 2.25rem;
  font-weight: 600;
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
export const Reception = styled.div`
  h3 {
    font-size: 1.25rem;
    margin: 0;
    font-weight: 600;
  }
  p {
    font-size: 1.25rem;
    margin: 0;
  }
`
export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: 1rem;
`
export const Divider = styled.hr`
  margin: 1.5rem 0;
`
export const PlaceName = styled.p`
  margin: 2rem 0 .35rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
`
export const PlaceBuilding = styled.p`
  margin: 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`
export const PlaceAddress = styled.p`
  margin: 0 0 .35rem;
  font-size: .75rem;
`
export const PlaceHours = styled.p`
  margin: 0 0 .35rem;
  font-size: .75rem;
`
export const Link = styled.a`
  color: ${props => props.theme.color};
  text-decoration: underline;
`
export const NameLink = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${props => (props.hasDetail ? props.theme.color : 'initial')};
  text-decoration: ${props => (props.hasDetail ? 'underline' : '')};
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
export const HideDesktop = styled.div`
  margin-top: 2rem;
  display: block;
  @media (min-width: ${sizes.medium}) {
    display: none;
  }
`
export const HideMobile = styled.div`
  margin-top: 2rem;
  display: none;
  @media (min-width: ${sizes.medium}) {
    display: block;
  }
`

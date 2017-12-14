import styled from 'styled-components'
import { sizes } from '../../util'

export const InfoContainer = styled.div`
  flex: 1;
  padding-left: 3rem;
  @media (min-width: ${sizes.medium}) {
  }
`

export const MapContainer = styled.div`
  flex: 2 !important;
  width: auto;
  ${'' /* .google-map-container {
    height: 0;
    padding-bottom: 100%;
    min-height: initial;
    > div {
      position: absolute !important;
    }
  } */}
`

export const MarkerWrapper = styled.div`
  svg, img, svg path, svg polygon, svg polyline {
    transition: .25s;
    fill: ${props => props.theme.color} !important;
  }
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`

import styled from 'styled-components'
import { sizes } from '../../util'

export const InfoContainer = styled.div`
  @media (min-width: ${sizes.medium}) {
  }
`

export const ReceptionContainer = styled.div`
  margin-left: 2rem;
  @media (min-width: ${sizes.medium}) {
  }
`

export const MapContainer = styled.div`
  height: 50vh;
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

import styled from 'styled-components'
import { colors, sizes } from '../../util'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2rem 1.5rem 4rem;
  @media (min-width: ${sizes.medium}) {
    flex-direction: row;
  }
`
export const Tagline = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: ${colors.alt.green};
  max-width: 43rem;
  @media (min-width: ${sizes.medium}) {
    font-size: 4.5rem;
  }
`
export const Description = styled.p`
  font-size: 1.25rem;
  max-width: 31rem;
`
export const EventDate = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  @media (min-width: ${sizes.medium}) {
    font-size: 2rem;
  }
`

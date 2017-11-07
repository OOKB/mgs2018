import styled from 'styled-components'
import { sizes } from '../../util'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 8rem 1.5rem 4rem;
  @media (min-width: ${sizes.large}) {
    flex-direction: row;
    margin: 12rem 1.5rem 4rem;
  }
`
export const Tagline = styled.h1`
  transition: .25s color;
  margin: 0;
  font-size: 3rem;
  line-height: 1.2;
  color: ${props => props.theme.color};
  max-width: 43rem;
  @media (min-width: ${sizes.small}) {
    font-size: 3.5rem;
  }
  @media (min-width: ${sizes.medium}) {
    font-size: 4.5rem;
  }
  @media (min-width: ${sizes.large}) {
    font-size: 4rem;
  }
  @media (min-width: ${sizes.extraLarge}) {
    font-size: 4.5rem;
  }
`
export const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.3;
`
export const DescriptionWrapper = styled.div`
  margin-top: 1rem;
  max-width: 31rem;
`
export const EventDate = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  @media (min-width: ${sizes.medium}) {
    font-size: 1.5rem;
    margin-right: 4rem;
  }
`

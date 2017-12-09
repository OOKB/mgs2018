import styled from 'styled-components'
import { colors, sizes } from '../../util'

export const GroupHeader = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 2rem 0;
  border-top: 1px solid ${props => props.theme.color};
  border-bottom: 1px solid ${props => props.theme.color};
  letter-spacing: 0.02em;
  margin: 0;
  margin-bottom: 2rem;
  @media (min-width: ${sizes.medium}) {
    border-top: 1px solid ${colors.grey};
    border-bottom: 1px solid ${colors.grey};
  }
`

export const GroupBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Group = styled.section`
  padding: 0 !important;
`
export const ShowItem = styled.section`
  padding: 0 !important;
  width: calc(100% / 1);
  margin: 0 0 5rem;
  background: none;
  z-index: 1;
  font-size: 1.25rem;
  &:hover {
    background: none;
    color: ${props => props.theme.color};
  }
  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.25rem; }
  @media (min-width: ${sizes.medium}) {
    width: calc(100% / 2);
    padding-right: 4rem !important;
    &:nth-child(2n) {
      padding-right: 0 !important;
    }
  }
  @media (min-width: ${sizes.large}) {
    width: calc(100% / 3);
    padding-right: 4rem !important;
    &:nth-child(2n) {
      padding-right: 4rem !important;
    }
    &:nth-child(3n) {
      padding-right: 0 !important;
    }
  }
`

export const Blurb = styled.p`
  width: 100%;
  margin: 0 0 5rem;
  font-size: 1.25rem;
  line-height: 1.3;
  @media (min-width: ${sizes.large}) {
    width: calc(100% / 3);
    padding-right: 4rem;
  }
`

import styled from 'styled-components'
import { sizes } from '../../util'

export const GroupHeader = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 2rem 0;
  border-top: 1px solid rgba(0,0,0,0.5);
  border-bottom: 1px solid rgba(0,0,0,0.5);
  letter-spacing: 0.02em;
  margin: 0;
  @media (min-width: ${sizes.medium}) {
  }
`

export const GroupBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Group = styled.section`
`
export const ShowItem = styled.section`
  width: calc(100% / 3);
  margin: 4rem 0 0;
  background: none;
  z-index: 1;
  font-size: 1.25rem;
  &:hover {
    background: none;
    color: ${props => props.theme.color};
  }
  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.25rem; }
`

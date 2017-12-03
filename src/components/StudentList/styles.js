import styled from 'styled-components'
import { sizes } from '../../util'

export const GroupHeader = styled.span`
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

export const GroupBody = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0,0,0,0.5);
  &:last-child { border-bottom: none; }
  &:hover { color: ${props => props.theme.color}; }
`

export const Cell = styled.span`
  flex: 3;
  min-width: 0;
  min-height: 0;
  &.name { flex: 4; }
  &.program { flex: 5; }
  &.show { flex: 3; }
  &.social { flex: 2; }
`

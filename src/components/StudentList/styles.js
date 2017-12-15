import styled from 'styled-components'
import { transparentize } from 'polished'
import { colors, sizes } from '../../util'

export const GroupHeader = styled.span`
  display: flex;
  font-size: 2.25rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 2rem 0;
  border-top: 1px solid rgba(0,0,0,0.5);
  border-bottom: 1px solid rgba(0,0,0,0.5);
  letter-spacing: 0.02em;
  margin: 0;
  padding-right: 2rem;
  &.name { flex: 3; }
  &.program { flex: 4; }
  &.show { flex: 4; }
  &.social {
    flex: none;
    width: 8rem;
    display: flex;
    padding-right: 0;
  }
  @media (min-width: ${sizes.medium}) {
  }
`

export const GroupBody = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.5);
  flex-direction: column;
  &:last-child { border-bottom: none; }
  &:hover { color: ${props => props.theme.color}; }
  @media (min-width: ${sizes.medium}) {
    flex-direction: row;
    align-items: center;
  }
`

export const Cell = styled.span`
  flex: 3;
  min-width: 0;
  min-height: 0;
  margin-right: 2rem;
  &.name { flex: 3; }
  &.program { flex: 4; }
  &.show { flex: 4; }
  &.social {
    margin-right: 0;
    a { color: black; }
    @media (min-width: ${sizes.medium}) {
      flex: none;
      width: 8rem;
      justify-content: flex-end;
      display: flex;
      a { margin-left: .5rem; }
    }
  }
  a {
    color: ${props => props.theme.color};
    text-decoration: underline;
    &:hover {
      opacity: 0.5;
  }
}
`

export const CustomSelect = styled.div`
  &.customSelect {
    select {
      &:focus {
        background: ${props => transparentize(0.95, props.theme.color)};
        outline-color: #fff
      }
    }
    &:hover {
      select {
        color: ${props => props.theme.color};
        &:focus {
          background: ${props => transparentize(0.95, props.theme.color)};
          outline-color: #fff};
        }
      &::after {
        color: ${props => props.theme.color};
      }
    }
  }
}
`

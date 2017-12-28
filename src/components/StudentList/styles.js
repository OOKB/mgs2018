import styled from 'styled-components'
import { transparentize } from 'polished'
import { sizes } from '../../util'

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
  position: relative;
  &:last-child { border-bottom: none; }
  &:hover {
    color: ${props => props.theme.color};
    img {
      opacity: .8;
    }
  }
  @media (min-width: ${sizes.medium}) {
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: ${sizes.medium}) {
    .name, .program, .show { margin-bottom: 0.5rem; }
    .name { font-size: 1.3rem; }
    .program { font-size: 1.1rem; }
    .show { font-size: 1.1rem; }
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
    border-bottom: none;
    &:hover {
      opacity: 0.5;
  }
}
`

export const CellImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  max-height: 35rem;
  max-width: 35rem;
  opacity: 0;
`

export const CustomSelect = styled.div`
  &.customSelect {
    select {
      &:focus {
        background: ${props => transparentize(0.95, props.theme.color)};
        outline-color: #fff
      }
      @media (max-width: ${sizes.medium}) {
        border: 1px solid ${props => props.theme.color};
        padding: 1rem .5rem;
        font-size: 1.25rem;
      }
    }
    @media (max-width: ${sizes.medium}) {
      &::after {
        display: none;
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

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${sizes.medium}) {
    flex-direction: row;
  }
`

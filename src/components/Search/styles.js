import styled from 'styled-components'
import { sizes } from '../../util'

export const SearchWrapper = styled.label`
  position: relative;
  width: 100%;

  @media (min-width: ${sizes.medium}) {
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  background-image: none;
  border: none;
  display: block;
  height: 3rem;
  font-size: 1.25rem;
  line-height: 3rem;
  width: 100%;
  padding: .5rem 2rem .5rem 4rem;
  transition: all 300ms;
  position: relative;
  z-index: 1;
  &:focus {
    border-color: ${props => props.theme.color};
    outline-color: ${props => props.theme.color};
  }
`

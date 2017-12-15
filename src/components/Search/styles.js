import styled from 'styled-components'
import { transparentize } from 'polished'
import { colors, sizes } from '../../util'

export const SearchWrapper = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  color: ${colors.grey};
  i {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (min-width: ${sizes.medium}) {
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  background-image: none;
  border: none;
  display: block;
  height: 3rem;
  font-size: 2rem;
  line-height: 3rem;
  width: 100%;
  transition: all 300ms;
  position: relative;
  z-index: 1;
  padding: .5rem 3rem .5rem 3rem;
  margin: 1rem 0;
  &:focus {
    background: ${props => transparentize(0.95, props.theme.color)};
    outline-color: #fff};
  }
  &::placeholder { color: ${colors.grey} }
`

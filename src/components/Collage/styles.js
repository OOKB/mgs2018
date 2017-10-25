import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 0px;
  padding-top: 60%;
  position: relative;
  margin: 2rem 1rem;
`

export const Image = styled.img`
  max-width: 60%;
  max-height: 90%;
  width: 100%;
  position: absolute;
  top: 10px;
  &:hover {
    z-index: 50;
  }
`

import styled from 'styled-components'

import { sizes } from '../../util'

export const ImageContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  flex: 2;
  .image-stack { display: none; }
  @media (min-width: ${sizes.medium}) {
    margin-top: 4.5rem;
    .image-stack { display: block; }
    .image-header-mobile { display: none; }
  }
`
export const InfoContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  flex: 2;
  @media (min-width: ${sizes.medium}) {
    margin-top: 4.5rem;
    padding-left: 3rem;
    .image-stack-mobile { display: none; }
  }
  @media (min-width: ${sizes.large}) {
    flex: 1;
  }
`
export const Box = styled.div`
  height: 0;
  width: 100%;
  padding-bottom: 50%;
  background: ${props => props.theme.color};
  @media (min-width: ${sizes.medium}) {
    padding-bottom: 100%;
  }
`
export const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.25rem;
  font-size: 2.25rem;
  font-weight: 600;
`
export const Divider = styled.hr`
  margin: 1.5rem 0;
`
export const Subtitle = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.color};
  text-transform: uppercase;
  letter-spacing: 0.02em;
`
export const Description = styled.p`
  margin: 0;
  margin-top: 1rem;
`
export const Social = styled.div`
  a {
    &:hover {
      opacity: .5;
    }
  }
`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${sizes.medium}) {
    flex-direction: row;
  }
`
export const ShowTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.color};
  text-decoration: underline;
  &:hover {
    opacity: .5;
  }
`
export const Back = styled.button`
  height: 5rem;
  width: 13rem;
  background: transparent;
  border: none;
  position: fixed;

  > * {
    pointer-events: none;
    position: static;
  }

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media (min-width: ${sizes.medium}) {
    height: 6rem;
    width: 16rem;
  }
`

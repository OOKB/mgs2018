import styled from 'styled-components'

export const ImageContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  flex: 2;
`
export const InfoContainer = styled.div`
  margin-top: 4.5rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Box = styled.div`
  height: 0;
  width: 100%;
  padding-bottom: 100%;
  background: ${props => props.theme.color};
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

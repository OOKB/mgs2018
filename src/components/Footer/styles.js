import styled from 'styled-components'
import { colors, sizes } from '../../util'

export const Wrapper = styled.div`
  margin: 6rem 0.75rem;
  border-top: 1px solid black;
`
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2rem .75rem 0;
  @media (min-width: ${sizes.medium}) {
    flex-direction: row;
  }
`
export const Chunk = styled.section`
  display: flex;
  flex-direction: ${props => (props.columns ? 'column' : 'row')};
  &:not(:first-child) {
    margin-top: 2rem;
  }
  @media (min-width: ${sizes.medium}) {
    &:not(:first-child) {
      margin-top: 0rem;
      margin-left: 2rem;
    }
  }
`
export const MicaLogo = styled.img`
  max-width: 12rem;
`
export const Atag = styled.a`
  font-size: 1.25em;
  color: ${colors.alt.green};
  text-decoration: underline;
`
export const FlexList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`
export const ListItem = styled.li`
  margin-right: 1.5rem;
`

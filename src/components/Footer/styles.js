import styled from 'styled-components'
import { colors, sizes } from '../../util'

export const Wrapper = styled.div`
  margin: 10rem 0.75rem;
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
  max-width: ${props => props.mw};
  align-items: ${props => (props.start ? 'flex-start' : '')};

  @media (min-width: ${sizes.extraLarge}) {
    flex-direction: ${props => (props.xlRows ? 'row' : '')};
  }
  @media (min-width: ${sizes.large}) {
    flex-direction: ${props => (props.lgRows ? 'row' : '')};
  }

  ${'' /* &:not(:first-child) {
    margin-top: 2rem;
  }
  @media (min-width: ${sizes.medium}) {
    &:not(:first-child) {
      margin-top: 0rem;
      margin-left: 2rem;
    }
  } */}
`
export const MicaLogo = styled.img`
  max-width: 12rem;
`
export const Atag = styled.a`
  font-size: 1rem;
  color: ${props => props.theme.color};
  text-decoration: none;
  text-shadow: .03em 0 ${colors.white}, -.03em 0 ${colors.white}, 0 .03em ${colors.white}, 0 -.03em ${colors.white}, .06em 0 ${colors.white}, -.06em 0 ${colors.white}, .09em 0 ${colors.white}, -.09em 0 ${colors.white}, .12em 0 ${colors.white}, -.12em 0 ${colors.white}, .15em 0 ${colors.white}, -.15em 0 ${colors.white};
  background-image: linear-gradient(${colors.white}, ${colors.white}), linear-gradient(${colors.white}, ${colors.white}), linear-gradient(${props => props.theme.color}, ${props => props.theme.color});
  background-size: .05em 1px, .05em 1px, 1px 1px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0% 100%, 100% 100%, 0% 100%;
  &:hover {
    opacity: .5;
  }
`
export const FlexList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: ${props => (props.columns ? 'column' : 'row')};
  flex-wrap: ${props => (props.wrap ? 'wrap' : '')};
`
export const ListItem = styled.li`
  width: ${props => (props.title ? '100%' : '')};
  margin-bottom: ${props => (props.link ? '0.5rem' : '')};
  &:not(:last-child) {
    margin-right: .75rem;
  }
  .fa-2x {
    font-size: 1.5rem;
  }
`
export const MenuWrapper = styled.div`
  .menu {
    margin: 0 0 1rem;
  }
  button {
    width: 100%;
    background: none;
    border: 1px solid ${props => props.theme.color};
    color: ${props => props.theme.color};
    .auth {
      &:after { content: 'Student Login'; }
      span { display: none; }
    }
  }
`

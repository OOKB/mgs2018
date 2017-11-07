import styled from 'styled-components'
import { colors, sizes } from '../../util'

export const Wrapper = styled.div`
  margin: 10rem 0.75rem;
  border-top: 1px solid black;
`
export const Footer = styled.footer`
  display: grid;
  justify-content: space-between;
  margin: 2rem .75rem 0;
  grid-template-columns: auto;
  grid-gap: 2rem 2rem;
  @media (min-width: ${sizes.medium}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${sizes.large}) {
    grid-template-columns: repeat(3, auto);
  }
  @media (min-width: ${sizes.extraLarge}) {
    grid-template-columns: repeat(5, auto);
  }
`
export const Chunk = styled.section`
  align-items: ${props => (props.start ? 'flex-start' : '')};
  @media (min-width: ${sizes.medium}) {
    max-width: ${props => props.mw};
    order: ${props => (props.mdOrder)};
  }
  @media (min-width: ${sizes.large}) {
    order: ${props => (props.lgOrder)};
    grid-row: ${props => (props.span ? '1 / span 2' : '')};
    grid-column: ${props => (props.span ? '2 / span 1' : '')};
  }
  @media (min-width: ${sizes.extraLarge}) {
    order: 1;
  }
`
export const MicaLogo = styled.img`
  max-width: 12rem;
`
export const Atag = styled.a`
  font-size: 1.25rem;
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
  @media (min-width: ${sizes.medium}) {
    font-size: 1rem;
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
  margin-bottom: ${props => (props.link ? '0.75rem' : '')};
  &:not(:last-child) {
    margin-right: .75rem;
  }
  @media (min-width: ${sizes.medium}) {
    margin-bottom: ${props => (props.num ? '1rem' : '')};
    margin-right: ${props => (props.num ? '1rem' : '')};
  }
  .fa-2x {
    font-size: 2rem;
    &:hover, &:focus {
      opacity: .5;
    }
    @media (min-width: ${sizes.medium}) {
      font-size: 1.5rem;
    }
  }
`
export const MenuWrapper = styled.div`
  width: 100%;
  .menu {
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem;
    width: 100%;
  }
  .home { display: none; }
  .studentList { display: none; }
  .auth, .logout {
    button {
      padding: .5rem 1rem;
      width: 100%;
      background: none;
      border: 1px solid ${props => props.theme.color};
      border-radius: 0;
      color: ${props => props.theme.color};
      &:hover, &:focus {
        color: ${props => props.theme.color} !important;
        opacity: .5;
      }
      @media (min-width: ${sizes.small}) {
        width: 50%;
      }
      @media (min-width: ${sizes.medium}) {
        width: 100%;
      }
    }
  }
  .me {
    a {
      padding: .5rem 1rem;
      margin-bottom: .25rem;
      width: 100%;
      background: none;
      border: 1px solid ${props => props.theme.color};
      border-radius: 0;
      color: ${props => props.theme.color};
      &:hover, &:focus {
        color: ${props => props.theme.color} !important;
        opacity: .5;
      }
      @media (min-width: ${sizes.small}) {
        width: 50%;
      }
      @media (min-width: ${sizes.medium}) {
        width: 100%;
      }
    }
    }
`

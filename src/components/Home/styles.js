import styled from 'styled-components'
import { sizes } from '../../util'

export const Wrapper = styled.div`
  width:100%;
  max-width: 88rem;
  margin: 0 auto;
  @media (min-width: ${sizes.medium}) {
    padding: 0 2rem;
  }
`

export const LogoWrapper = styled.div`
  position: relative;
  margin: ${props => (props.top ? '1.5rem 0' : '-2rem 0')};
  @media (min-width: ${sizes.medium}) {
    margin: ${props => (props.top ? '1.5rem 0' : '-4rem 0')};
  }
`

export const MicaLogo = styled.div`
  position: absolute;
  z-index: 100;
  right: 1.5rem;
  svg path, svg polygon, svg polyline {
    transition: .25s;
    fill: ${props => props.theme.color};
  }
`

export const MenuWrapper = styled.div`
  width: 100%;
  .menu {
    margin: 1rem 0 0 1.5rem;
    display: block;
    text-align: left;
    > li {
      display: inline-block;
      text-align: left;
      &:first-child:after {
        content: '/';
        display: inline-block;
        padding: 0;
        font-size: 2rem !important;
        font-weight: 700;
        margin: 0 1.5rem;
        @media (min-width: ${sizes.small}) {
          font-size: 3rem !important;
        }
      }
      a {
        background: none !important;
        border: none !important;
        border-bottom: 1px ${props => props.theme.color} solid !important;
        display: inline !important;
        padding: 0;
        font-size: 2rem !important;
        font-weight: 700;
        color: ${props => props.theme.color};
        @media (min-width: ${sizes.small}) {
          font-size: 3rem !important;
        }
        &.active {
          border-bottom: none !important;
        }
        &:not(.active):   hover {
          color: ${props => props.theme.color};
          opacity: .5;
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'

import mgsLogo from '../../mgs2018logo.svg'
import yearLogo from '../../mgs2018year.svg'

import Page from '../Page'
import Logo from '../Logo/Logo'
import Slideshow from '../Slideshow/SlideTest'
import Blurb from '../Blurb/Blurb'
import Menu from './Menu'

import { Wrapper, LogoWrapper, MicaLogo, MenuWrapper } from './styles'

const micaLogo = `
<svg width="90px" height="23px" viewBox="0 0 90 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="micalogo-small">
        <polyline id="Shape" fill="#000000" fill-rule="nonzero" points="32.964 19.196 32.964 15.52 34.602 15.52 34.602 8.125 32.964 8.125 32.964 4.47 42.754 4.47 42.754 8.125 41.115 8.125 41.115 15.52 42.754 15.52 42.754 19.196 32.964 19.196"></polyline>
        <path d="M61.913,11.339 L61.913,11.15 C61.934,9.807 61.513,7.873 59.791,7.873 C57.563,7.873 57.437,10.289 57.437,11.949 C57.437,13.566 57.689,16.046 59.833,16.046 C61.807,16.046 62.144,14.407 61.976,12.789 L66.178,12.789 L66.178,13.481 C66.136,17.81 62.794,19.47 58.846,19.47 C53.908,19.47 50.526,17.033 50.526,11.865 C50.526,7.496 53.236,4.175 57.754,4.175 C59.853,4.175 60.968,4.828 62.186,6.507 L62.228,4.47 L66.219,4.47 L66.219,11.339 L61.913,11.339" id="Shape" fill="#000000" fill-rule="nonzero"></path>
        <polygon id="Shape" fill="#000000" fill-rule="nonzero" points="28.307 22.909 28.96 22.909 28.96 0.77 28.307 0.77"></polygon>
        <g id="Group" transform="translate(46.000000, 0.000000)">
            <g id="Clipped">
                <mask id="mask-2" fill="white">
                    <polygon points="28.69 22.94 28.69 0.67 0.306 0.67 0.306 22.94"></polygon>
                </mask>
                <g id="a"></g>
                <polygon id="Shape" fill="#000000" fill-rule="nonzero" mask="url(#mask-2)" points="0.306 22.909 0.96 22.909 0.96 0.77 0.306 0.77"></polygon>
            </g>
            <g id="Clipped">
                <mask id="mask-4" fill="white">
                    <polygon points="28.69 22.94 28.69 0.67 0.306 0.67 0.306 22.94"></polygon>
                </mask>
                <g id="a"></g>
                <polygon id="Shape" fill="#000000" fill-rule="nonzero" mask="url(#mask-4)" points="21.254 23 28.69 0.878 28.071 0.67 20.635 22.791"></polygon>
            </g>
        </g>
        <path d="M5.706,15.52 L7.042,15.52 L7.042,19.196 L0,19.196 L0,15.52 L1.638,15.52 L1.638,8.125 L0,8.125 L0,4.47 L11.092,4.47 C11.491,5.794 11.995,7.075 12.373,8.399 C12.793,7.054 13.318,5.773 13.823,4.47 L23.445,4.47 L23.445,8.125 L21.806,8.125 L21.806,15.52 L23.445,15.52 L23.445,19.196 L14.817,19.196 L14.817,15.52 L16.056,15.52 L16.056,9.106 L12.264,19.196 L9.794,19.196 L5.706,9.337 L5.706,15.52 L5.706,15.52 Z M79.853,8.117 C79.623,9.104 78.848,11.15 78.553,12.117 L81.188,12.117 C80.916,11.13 80.084,9.125 79.853,8.117 L79.853,8.117 Z M80.727,19.196 L80.727,15.52 L82.325,15.52 C82.157,14.954 81.903,14.386 81.756,13.818 L78.008,13.818 C77.861,14.386 77.63,14.954 77.462,15.52 L79.097,15.52 L79.097,19.196 L72.942,19.196 L72.942,15.52 L74.244,15.52 C75.484,11.844 76.681,8.146 77.942,4.47 L84.623,4.47 C85.7723968,8.17095847 86.9765287,11.8546956 88.235,15.52 L90,15.52 L90,19.196 L80.727,19.196 L80.727,19.196 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
    </g>
</g>
</svg>`

function HomeWrapperEl({ children, siteName, studentArt }) {
  return (
    <Page className="App">
      <Wrapper>
        <LogoWrapper top>
          {siteName && <Logo primary left logoSrc={mgsLogo} siteName={siteName} />}
          <MicaLogo dangerouslySetInnerHTML={{ __html: micaLogo }} />
        </LogoWrapper>
        {studentArt && studentArt.length > 0 && <Slideshow collection={studentArt} />}
        <LogoWrapper>
          <Logo right primary logoSrc={yearLogo} siteName={siteName} />
        </LogoWrapper>
        {siteName && <Blurb mgsBlock={mgsLogo} siteName={siteName} />}
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        {children}
      </Wrapper>
    </Page>
  )
}
const artPropType = PropTypes.shape({
  id: PropTypes.string,
  image: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
  }),
  title: PropTypes.string,
})
HomeWrapperEl.propTypes = {
  children: PropTypes.node.isRequired,
  studentArt: PropTypes.arrayOf(artPropType),
}
HomeWrapperEl.defaultProps = {
  studentArt: null,
}

export default HomeWrapperEl

import React from 'react'
import PropTypes from 'prop-types'
// import LinkEl from 'cape-mixer/lib/Link/Link'
import mgsLogo from '../../mgs2018logo.svg'
import micaLogo from '../../micalogo-small.svg'
import Blurb from '../Blurb/Blurb'
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import Collage from '../Collage/Collage'
import ArtAll from './ArtAll'
import { Wrapper, LogoWrapper } from './styles'

function Splash({ art, artAll, siteName }) {
  return (
    <Wrapper>
      <LogoWrapper>
        {siteName && <Logo primary logoSrc={mgsLogo} siteName={siteName} />}
        <Logo logoSrc={micaLogo} siteName={siteName} />
      </LogoWrapper>
      {art && art.length > 0 && <Collage collection={art} />}
      {siteName && <Blurb mgsBlock={mgsLogo} siteName={siteName} />}
      {artAll && artAll.length && <ArtAll collection={artAll} /> }
      {/* <LinkEl action={loginAction} {...login} /> */}
      <Footer />
    </Wrapper>
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
Splash.propTypes = {
  art: PropTypes.arrayOf(artPropType),
  artAll: PropTypes.objectOf(artPropType),
  siteName: PropTypes.string.isRequired,
}
Splash.defaultProps = {
  art: null,
  artAll: null,
}
Splash.defaultProps = {
  art: null,
  siteName: 'MICA Grad Show 2018',
}

export default Splash

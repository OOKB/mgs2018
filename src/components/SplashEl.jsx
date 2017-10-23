import React from 'react'
import PropTypes from 'prop-types'
// import LinkEl from 'cape-mixer/lib/Link/Link'
import mgsLogo from '../mgs2018logo.svg'
import Blurb from './Blurb/Blurb'
import Logo from './Logo/Logo'
import Menu from './Header/Menu'
import Footer from './Footer/Footer'
import Collage from './Collage/Collage'

function Splash({ art, siteName }) {
  return (
    <div>
      {siteName && <Logo mgsLogo={mgsLogo} siteName={siteName} />}
      {art && art.length > 0 && <Collage collection={art} />}
      {siteName && <Blurb mgsBlock={mgsLogo} siteName={siteName} />}
      <Menu />
      <h2>{siteName}</h2>
      {/* <LinkEl action={loginAction} {...login} /> */}
      <Footer />
    </div>
  )
}

Splash.propTypes = {
  art: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
    }),
    title: PropTypes.string,
  })),
  siteName: PropTypes.string.isRequired,
}
Splash.defaultProps = {
  art: null,
}

export default Splash

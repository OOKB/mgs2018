import React from 'react'
import PropTypes from 'prop-types'
// import LinkEl from 'cape-mixer/lib/Link/Link'
import mgsBlock from '../mgs2017LogoBlock.svg'
import Blurb from './Blurb/Blurb'
import Menu from './Header/Menu'
import Collage from './Collage/Collage'

function Splash({ art, siteName }) {
  return (
    <div>
      {art && art.length > 0 && <Collage collection={art} />}
      {siteName && <Blurb mgsBlock={mgsBlock} siteName={siteName} />}
      <Menu />
      <h2>{siteName}</h2>
      {/* <LinkEl action={loginAction} {...login} /> */}
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

import React from 'react'
import PropTypes from 'prop-types'
// import LinkEl from 'cape-mixer/lib/Link/Link'
import mgsBlock from '../mgs2017LogoBlock.svg'
import Blurb from './Blurb/Blurb'
import Menu from './Header/Menu'

function Splash({ siteName }) {
  return (
    <div>
      <Blurb mgsBlock={mgsBlock} siteName={siteName} />
      <Menu />
      <h2>{siteName}</h2>
      {/* <LinkEl action={loginAction} {...login} /> */}
    </div>
  )
}

Splash.propTypes = {
  // login: PropTypes.shape({
  //   id: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  // }).isRequired,
  // loginAction: PropTypes.func.isRequired,
  siteName: PropTypes.string.isRequired,
}
Splash.defaultProps = {
}

export default Splash

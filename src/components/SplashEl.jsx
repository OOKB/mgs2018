import React from 'react'
import PropTypes from 'prop-types'
import LinkEl from 'cape-mixer/lib/Link/Link'
import mgsBlock from '../mgs2017LogoBlock.svg'
import Blurb from './Blurb/Blurb'

function Splash({ login, loginAction, siteName }) {
  return (
    <div>
      <Blurb mgsBlock={mgsBlock} siteName={siteName} />
      <h2>2018</h2>
      <LinkEl action={loginAction} {...login} />
    </div>
  )
}

Splash.propTypes = {
  login: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  loginAction: PropTypes.func.isRequired,
  siteName: PropTypes.string.isRequired,
}
Splash.defaultProps = {
}

export default Splash

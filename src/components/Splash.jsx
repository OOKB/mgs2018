import React from 'react'
import PropTypes from 'prop-types'
import mgsBlock from '../mgs2017LogoBlock.svg'
import Blurb from './Blurb/Blurb'

function Splash({ siteName }) {
  return (
    <div>
      <Blurb mgsBlock={mgsBlock} siteName={siteName} />
      <h2>2018</h2>
    </div>
  )
}

Splash.propTypes = {
  siteName: PropTypes.string,
}
Splash.defaultProps = {
  siteName: 'MICA Grad Show',
}

export default Splash

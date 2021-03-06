import React from 'react'
import PropTypes from 'prop-types'
import { LogoEl } from './styles'

function Logo({ logoSrc, siteName, primary, left, right, fixed, sttc }) {
  return (
    <LogoEl
      primary={primary}
      left={left}
      right={right}
      fixed={fixed}
      sttc={sttc}
      type="image/svg+xml"
      data={logoSrc}
      alt={siteName}
      title={siteName}
    >
      {siteName}
    </LogoEl>
  )
}

Logo.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  siteName: PropTypes.string,
  primary: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  fixed: PropTypes.bool,
  sttc: PropTypes.bool,
}
Logo.defaultProps = {
  siteName: 'MICA Grad Show',
  primary: false,
  left: false,
  right: false,
  fixed: false,
  sttc: false,
}

export default Logo

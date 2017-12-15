import React from 'react'
import PropTypes from 'prop-types'
import { LogoEl } from './styles'

function Logo({ logoSrc, siteName, primary, left, right, fixed }) {
  return (
    <LogoEl
      primary={primary}
      left={left}
      right={right}
      fixed={fixed}
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
  siteName: PropTypes.string.isRequired,
  primary: PropTypes.boolean,
}

Logo.defaultProps = {
  primary: false,
}

export default Logo

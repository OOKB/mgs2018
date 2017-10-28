import React from 'react'
import PropTypes from 'prop-types'
import { LogoEl } from './styles'

function Logo({ logoSrc, siteName, primary }) {
  return (
    <LogoEl primary={primary} type="image/svg+xml" data={logoSrc} alt={siteName} title={siteName} >
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

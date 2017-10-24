import React from 'react'
import PropTypes from 'prop-types'
import { LogoEl } from './styles'

const Logo = ({ logoSrc, siteName, primary }) => {
  console.log(primary)
  return (
    <LogoEl primary={primary} src={logoSrc} alt={siteName} title={siteName} />
  )
}

export default Logo

Logo.propTypes = {
  mgsLogo: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
}

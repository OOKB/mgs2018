import React from 'react'
import PropTypes from 'prop-types'
import { LogoEl } from './styles'

const Logo = ({ mgsLogo, siteName }) => {
  return (
    <LogoEl src={mgsLogo} alt={siteName} title={siteName} />
  )
}

export default Logo

Logo.propTypes = {
  mgsLogo: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from 'styled-components'
import { MarkerWrapper } from './styles'

function DetailMapLocation({ i }) {
  return <MarkerWrapper text={i} />
}

DetailMapLocation.propTypes = {
  i: PropTypes.number.isRequired,
}
DetailMapLocation.defaultProps = {}

export default withTheme(DetailMapLocation)

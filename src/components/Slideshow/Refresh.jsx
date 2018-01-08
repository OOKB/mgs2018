import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { onChange, selectFieldValue } from 'redux-field'

import { Refresh } from './styles'

function RefreshArt({ onChange, prefix, value }) {
  return (
    <Refresh prefix="slider-refresh" onClick={() => onChange(prefix, value + 1)}>
      &#x21bb; <span>More Artworks</span>
    </Refresh>
  )
}

RefreshArt.propTypes = {
  onChange: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}
RefreshArt.defaultProps = {
  value: 0,
}
export default connect(createStructuredSelector({
  value: selectFieldValue,
}), { onChange })(RefreshArt)

import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import Icon from 'cape-mixer/lib/Icon'

import { SearchWrapper, SearchInput } from './styles'

function SearchEl({ onChange, value }) {
  return (
    <SearchWrapper htmlFor="search">
      <Icon
        hidden
        style={css('fs2')}
        symbol="search"
      />
      <SearchInput
        className="search"
        placeholder="Search"
        onChange={onChange}
        value={value || ''}
        type="text"
      />
    </SearchWrapper>
  )
}

SearchEl.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}
SearchEl.defaultProps = {
  onChange: null,
  value: null,
}
export default SearchEl

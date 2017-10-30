import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'

function ArtAll({ collection }) {
  return (
    <ul>
      {map(collection, ({ id, image: { url } }) =>
        <li>{id}<img src={`${url}?w=200`} alt={id} /></li>
      )}
    </ul>
  )
}
ArtAll.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string,
  })).isRequired,
}
export default ArtAll

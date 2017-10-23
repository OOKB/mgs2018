import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import { Wrapper } from './styles'
import ImageContainer from './ImageContainer'

function Collage({ collection }) {
  return (
    <Wrapper>
      {map(collection, (item, index) =>
        <ImageContainer key={item.id} item={item} pos={index} />
      )}
    </Wrapper>
  )
}
Collage.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string,
  })).isRequired,
}
export default Collage

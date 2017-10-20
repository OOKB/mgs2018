import React from 'react'
import PropTypes from 'prop-types'
import { map, random } from 'lodash'
import { Wrapper } from './styles'
import ImageContainer from './ImageContainer'

const Collage = ({ collection }) => {

  let getPos = () => {
    return {
      current: {
        x: random(0,50),
        y: random(0,50)
      },
      to: {
        x: random(50,400),
        y: random(50,400)
      }
    }
  }

  return (
    <Wrapper>
      {collection && map( collection, item =>
        <ImageContainer item={item} position={getPos()} />
      )}
    </Wrapper>
  )
}

Collage.propTypes = {
  collection: PropTypes.array.isRequired
}

Collage.defaultProps = {
  collection: null
}

export default Collage

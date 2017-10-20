import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion';
import { Image } from './styles'

const ImageContainer = ({ item, position, test }) => {
  console.log(position)
  return (
    <Motion
      defaultStyle={{ left: position.current.x, top: position.current.y }}
      style={{ left: spring( position.to.x ), top: spring( position.to.y ) }}
      onRest={ () => { console.log('test') }}>

      { style =>
      <Image key={item.id} src={`${item.image.url}?w=100`} style={style}></Image>
      }
    </Motion>
  )
}

ImageContainer.propTypes = {
}

ImageContainer.defaultProps = {
}

export default ImageContainer

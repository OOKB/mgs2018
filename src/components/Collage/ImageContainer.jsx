import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'
import { random, round } from 'lodash'
import { Image } from './styles'

/* global window */

// Return some random settings.
export function initialPos() {
  return {
    stiffness: random(10, 20),
    damping: random(10, 40),
    currentX: random(0, 50),
    currentY: random(0, 50),
    toX: random(50, 100),
    toY: random(50, 100),
  }
}
export const getImgHeight = (height, width, resizeWidth) => round((height / width) * resizeWidth)

export function getImgProps({ image: { height, url, width } }, resizeWidth) {
  return {
    height: getImgHeight(height, width, resizeWidth),
    width: resizeWidth,
    src: `${url}?w=${resizeWidth}`,
  }
}
class ImageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pos: null,
      stiffness: 10,
      damping: 20,
      width: null,
      height: null,
      currentX: 0,
      currentY: 0,
      toX: 0,
      toY: 0,
    }
  }

  componentWillMount() {
    this.setState(initialPos())
  }

  componentDidMount() {
  }
  // measure() {}
  updatePos() {
    const newState = {
      stiffness: random(10, 20),
      damping: random(10, 40),
      currentX: random(0, 50),
      currentY: random(0, 50),
      toX: random(50, 100),
      toY: random(50, 100),
    }
    // https://github.com/chenglou/react-motion/issues/322
    // issue with react-motion changing state onRest
    window.setTimeout(() => {
      this.setState(newState)
    }, 0)
  }
  render() {
    const { item } = this.props
    const { currentX, currentY, toX, toY, stiffness, damping } = this.state
    const style = {
      left: spring(toX, { stiffness, damping }),
      top: spring(toY, { stiffness, damping }),
    }
    return (
      <Motion
        key={item.id}
        defaultStyle={{ left: currentX, top: currentY }}
        style={style}
        onRest={() => { this.updatePos() }}
      >
        { styles =>
          <Image {...getImgProps(item, 300)} style={styles} />
        }
      </Motion>
    )
  }
}
ImageContainer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string,
  }).isRequired,
}
export default ImageContainer

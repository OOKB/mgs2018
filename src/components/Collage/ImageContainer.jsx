import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'
import { random, round } from 'lodash'
import { Image } from './styles'

/* global window */

export const getImgHeight = (height, width, resizeWidth) => round((height / width) * resizeWidth)

export function getImgProps({ image: { height, url, width } }, resizeWidth) {
  return {
    height: getImgHeight(height, width, resizeWidth),
    width: resizeWidth,
    aspectRatio: (height / width),
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
      precision: 0.5,
      parentWidth: null,
      parentHeight: null,
      currentX: 0,
      currentY: 0,
      toX: 0,
      toY: 0,
    }
  }

  componentWillMount() {
    // console.log(this.props)
    // this.setState(initialPos())
  }

  componentDidMount() {
    // grab dimensions of the wrapper element
    this.setState(this.initialPos())
  }

  // Return some random settings.
  initialPos() {
    let wrapHeight = 0
    let wrapWidth = 0
    let imageHeight = 0
    let imageWidth = 0

    if (this.wrapContainer && this.wrapContainer.parentNode) {
      wrapHeight = this.wrapContainer.parentNode.offsetHeight
      wrapWidth = this.wrapContainer.parentNode.offsetWidth
    }
    if (this.imageEl.props.aspectRatio && this.imageEl.props.aspectRatio < 1) {
      imageWidth = wrapWidth * 0.6
      imageHeight = round(imageWidth * this.imageEl.props.aspectRatio)
    } else {
      imageHeight = wrapHeight * 0.9
      imageWidth = round(imageHeight / this.imageEl.props.aspectRatio)
    }

    const xBound = (wrapWidth - imageWidth) * 0.1
    const yBound = (wrapHeight - imageHeight)
    const left = 0
    const center = (wrapWidth / 2) - (imageWidth / 2) - xBound
    const right = wrapWidth - imageWidth - xBound
    const xpos = [left, center, right]

    const startingX = xpos[this.imageEl.props.pos]
    const finalX = (startingX + xBound)
    // const startingY = 0

    return {
      stiffness: random(40, 80),
      damping: random(10, 40),
      currentX: 0,
      currentY: 0,
      toX: random(startingX, finalX),
      toY: random(0, yBound),
      parentWidth: wrapWidth,
      parentHeight: wrapHeight,
      xMin: startingX,
      xMax: finalX,
      yMin: 0,
      yMax: yBound,
    }
  }

  runTest(progress) {
    if(progress >= .99){
      this.updatePos()
      console.log(progress)
    }
  }

  updatePos() {
    // console.log(this.state)
    const newState = {
      stiffness: random(2, 4),
      damping: random(4, 8),
      precision: random(0.001, 1),
      // currentX: this.state.toX,
      // currentY: this.state.toY,
      toX: random(this.state.xMin, this.state.xMax),
      toY: random(this.state.yMin, this.state.yMax),
    }
    // https://github.com/chenglou/react-motion/issues/322
    // issue with react-motion changing state onRest
    window.setTimeout(() => {
      this.setState(newState)
    }, 0)
  }
  render() {
    const { item } = this.props
    const { currentX, currentY, toX, toY, stiffness, damping, precision } = this.state
    const style = {
      left: spring(toX, { stiffness, damping, precision }),
      top: spring(toY, { stiffness, damping, precision }),
    }
    return (
      <span ref={el => {this.wrapContainer = el} }>
        <Motion
          key={item.id}
          defaultStyle={{ left: currentX, top: currentY }}
          style={style}
          // onRest={() => { this.updatePos() }}
        >
          { styles =>
            <div>
            <Image {...getImgProps(item, 300)} pos={this.props.pos} style={styles} ref={ref => {this.imageEl = ref} }/>
            { this.runTest(styles.left / toX) }
            </div>
          }
        </Motion>
      </span>
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

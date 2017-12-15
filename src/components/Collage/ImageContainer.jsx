import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'
import { random, round } from 'lodash'
import { Image, ImageWrapper, Caption, CaptionItem } from './styles'

/* global window */

export const getImgHeight = (height, width, resizeWidth) => round((height / width) * resizeWidth)

export function getImgProps({ image: { height, url, width } }, resizeWidth) {
  return {
    orientation: 'tallwide',
    src: `${url}?w=${resizeWidth}`,
  }
}

export function getImgSize({ image: { height, width } }) {
  return {
    aspectRatio: (height / width),
  }
}

class ImageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    // grab dimensions of the wrapper element
    this.setState(this.initialPos())
  }

  componentDidMount() {
  }

  // Return some random settings.
  initialPos() {
    const wrapHeight = this.props.parent.height
    const wrapWidth = this.props.parent.width

    const image = { ...getImgSize(this.props.item) }

    let imageHeight = 0
    let imageWidth = 0
    let imageAR = image.aspectRatio

    if (image.aspectRatio && image.aspectRatio < 1) {
      imageWidth = wrapWidth * 0.5
      imageHeight = round(imageWidth * image.aspectRatio)
    } else {
      imageHeight = wrapHeight * 0.9
      imageWidth = round(imageHeight / image.aspectRatio)
    }

    const xBound = (wrapWidth - imageWidth) * 0.2
    const yBound = (wrapHeight - imageHeight)
    const left = 0
    const center = (wrapWidth / 2) - (imageWidth / 2) - xBound
    const right = wrapWidth - imageWidth - xBound
    const xpos = [left, center, right]

    const startingX = xpos[this.props.pos]
    const finalX = (startingX + xBound)
    const startingY = 0
    const finalY = yBound

    return {
      stiffness: random(70, 110),
      damping: random(20, 80),
      currentX: random(startingX, finalX),
      currentY: random(startingY, finalY),
      toX: random(startingX, finalX),
      toY: random(0, yBound),
      parentWidth: wrapWidth,
      parentHeight: wrapHeight,
      imgAspectRatio: imageAR,
      imgWidth: imageWidth,
      imgHeight: imageHeight,
      xMin: startingX,
      xMax: finalX,
      yMin: 0,
      yMax: yBound,
      z: random(0, 30),
    }
  }

  // update position before momentum reaches 0
  catchMotion(progress) {
    if (progress >= 0.99) {
      this.updatePos()
    }
  }

  updatePos() {
    const newState = {
      stiffness: random(70, 110),
      damping: random(20, 80),
      precision: random(1, 1),
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
    const { currentX, currentY, toX, toY, stiffness, damping, precision, imgWidth, z } = this.state
    const style = {
      left: spring(toX, { stiffness, damping, precision }),
      top: spring(toY, { stiffness, damping, precision }),
    }
    return (
      <Motion
        key={item.id}
        defaultStyle={{ left: currentX, top: currentY }}
        style={style}
        onRest={() => { this.updatePos() }}
      >
        { styles =>
          <div>
            <ImageWrapper z={z} style={styles}>
              <Image {...getImgProps(item, imgWidth)} ref={ref => {this.imageEl = ref} } />
              <Caption>
                {item.event && <CaptionItem bold caps>{item.event}</CaptionItem> }
                {item.title && <CaptionItem italic>{item.title}</CaptionItem> }
                {item.person && <CaptionItem>{item.person.name && <span>{item.person.name}</span>}{item.person.program && <span>, {item.person.program}</span>}</CaptionItem> }
              </Caption>
            </ImageWrapper>
            {/* { this.catchMotion(styles.left / toX) } */}
          </div>
        }
      </Motion>
    )
  }
}
ImageContainer.propTypes = {
  parent: PropTypes.shape({
    isLoaded: PropTypes.boolean,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    event: PropTypes.string,
    image: PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
    person: PropTypes.shape({
      name: PropTypes.string,
      program: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
}
export default ImageContainer

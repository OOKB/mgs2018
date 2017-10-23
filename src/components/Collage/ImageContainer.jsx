import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion';
import { map, random } from 'lodash'
import { Image } from './styles'

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: null,
      stiffness: 10,
      damping: 20,
      width: null,
      height: null,
      currentX: 0,
      currentY: 0,
      toX: 0,
      toY: 0
    };
  }

  saveRef = (ref) => this.containerNode = ref

  measure() {
    console.log('ping')
    const {clientWidth, clientHeight} = this.containerNode

    this.setState({
      width: clientWidth,
      height: clientHeight,
    })
  }

  initialPos() {
    console.log(this.props.pos)

    return {
      stiffness: random(10,20),
      damping: random(10,40),
      currentX: random(0,50),
      currentY: random(0,50),
      toX: random(50,400),
      toY: random(50,400)
    }
  }

  updatePos() {
    let newState = {
      stiffness: random(10,20),
      damping: random(10,40),
      currentX: random(0,50),
      currentY: random(0,50),
      toX: random(50,400),
      toY: random(50,400)
    }
    // https://github.com/chenglou/react-motion/issues/322
    // issue with react-motion changing state onRest
    window.setTimeout(() => {
      this.setState(newState)
    }, 0);
  }

  componentWillMount() {
    this.measure()
  }

  componentDidMount() {
    this.measure()
  }

  render() {

    return (
      <Motion
        key={this.props.item.id}
        defaultStyle={{ left: this.state.currentX, top: this.state.currentY }}
        style={{ left: spring( this.state.toX, {stiffness: this.state.stiffness, damping: this.state.damping} ), top: spring( this.state.toY, {stiffness: this.state.stiffness, damping: this.state.damping}) }}
        onRest={ () => { this.updatePos() }}>

        { style =>
        <Image src={`${this.props.item.image.url}?w=100`} ref={this.saveRef} style={style}></Image>
        }
      </Motion>
    )
  }
}

export default ImageContainer

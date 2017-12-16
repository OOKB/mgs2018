import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import { Wrapper, Image, ImageWrapper, Refresh } from './styles'
import ImageContainer from './ImageContainer'

class Collage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      width: null,
      height: null,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }
  shouldComponentUpdate(nextProps, nextState) {
    const loadingChange = this.state.isLoaded !== nextState.isLoaded
    return loadingChange
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }
  updateDimensions() {
    const wrapHeight = this.wrapperEl.offsetHeight
    const wrapWidth = this.wrapperEl.offsetWidth
    console.log(wrapHeight)
    this.setState({ isLoaded: true, width: wrapWidth, height: wrapHeight })
  }
  handleClick() {
    this.forceUpdate()
  }
  render() {
    const { collection } = this.props
    const { isLoaded } = this.state
    const parent = this.state
    return (
      <div ref={ref => {this.wrapperEl = ref}}>
        <Wrapper>
          {isLoaded && map(collection, (item, index) =>
            <ImageContainer key={item.id} item={item} parent={parent} pos={index} />
          )}
          <Refresh onClick={this.handleClick}>
            &#x21bb; <span>More Artwork</span>
          </Refresh>
        </Wrapper>
      </div>
    )
  }
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

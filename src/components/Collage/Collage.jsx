import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import { Wrapper } from './styles'
import ImageContainer from './ImageContainer'

class Collage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      width: null,
      height: null,
    }
  }
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
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

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
    this.setState(this.initialPos())
  }
  initialPos() {
    const wrapHeight = this.wrapperEl.offsetHeight
    const wrapWidth = this.wrapperEl.offsetWidth
    return {
      isLoaded: true,
      width: wrapWidth,
      height: wrapHeight,
    }
  }
  render() {
    const { collection } = this.props
    const { isLoaded } = this.state
    const parent = this.state
    return (
      <Wrapper ref={ref => {this.wrapperEl = ref}}>
        {isLoaded && map(collection, (item, index) =>
          <ImageContainer key={item.id} item={item} parent={parent} pos={index} />
        )}
      </Wrapper>
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

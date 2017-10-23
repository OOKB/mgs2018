import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import { Wrapper } from './styles'
import ImageContainer from './ImageContainer'

class Collage extends React.Component {
  constructor(props) {
    	super(props);
        this.state = {
        };
    }

  render() {
    let test = () => { console.log( 'testing function' ) }
    return (
      <Wrapper>
        {this.props.collection && map( this.props.collection, (item, i) =>
          <ImageContainer key={item.id} item={item} pos={i} func={test.bind(this)} />
        )}
      </Wrapper>
    )
  }
}

export default Collage

import React from 'react'
import PropTypes from 'prop-types'

const Collage = ({ art }) => {
  return (
    <Wrapper>
      <Image></Image>
    </Wrapper>
  )
}

Collage.propTypes = {
  art: PropTypes.array.isRequired,
}

Collage.defaultProps = {
  art: [],
}

export default Collage

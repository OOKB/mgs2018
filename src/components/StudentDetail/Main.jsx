import React from 'react'
import PropTypes from 'prop-types'
// import css from 'cape-style'
import mgsBlock from '../../mgs2017LogoBlock.svg'

import Slideshow from './Slideshow'
import NoImages from './NoImages'
import ProgramList from './ProgramList'

function Main({ art, program, statement }) {
  return (
    <div className="student-main">
      <div className="container flex">
        <ProgramList {...program} />
      </div>
    </div>
  )
}

Main.propTypes = {
  art: PropTypes.arrayOf(PropTypes.object).isRequired,
  statement: PropTypes.string.isRequired,
  program: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
}
Main.defaultProps = {
}

export default Main

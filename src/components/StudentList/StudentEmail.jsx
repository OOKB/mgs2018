import React from 'react'
import PropTypes from 'prop-types'

function StudentEmail({ email }) {
  return (
    <li>
      {email}
    </li>
  )
}

StudentEmail.propTypes = {
  email: PropTypes.string,
}
StudentEmail.defaultProps = {
  email: null,
}
export default StudentEmail

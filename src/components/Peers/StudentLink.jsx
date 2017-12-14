import React from 'react'
import PropTypes from 'prop-types'
import LinkEl from 'cape-mixer/lib/Link/Link'

function StudentLink({ children, id }) {
  if (!id) return children
  return <LinkEl routeId="studentDetail" studentId={id}>{children}</LinkEl>
}
StudentLink.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}
StudentLink.defaultProps = {
}
export default StudentLink

import React from 'react'
import PropTypes from 'prop-types'
import LinkEl from 'cape-mixer/lib/Link/Link'

function StudentLink({ children, detailUrl, id }) {
  if (!detailUrl) return children
  return <LinkEl routeId="studentDetail" studentId={id}>{children}</LinkEl>
}
StudentLink.propTypes = {
  children: PropTypes.node.isRequired,
  detailUrl: PropTypes.string,
  id: PropTypes.string.isRequired,
}
StudentLink.defaultProps = {
  detailUrl: null,
}
export default StudentLink

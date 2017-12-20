import React from 'react'
import PropTypes from 'prop-types'
import LinkEl from 'cape-mixer/lib/Link/Link'

function StudentLink({ children, hasDetail, id }) {
  if (!hasDetail) return children
  return <LinkEl routeId="studentDetail" studentId={id} top>{children}</LinkEl>
}
StudentLink.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  hasDetail: PropTypes.bool.isRequired,
}
StudentLink.defaultProps = {
}
export default StudentLink

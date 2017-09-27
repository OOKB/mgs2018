import { find, get } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import LinkEl from 'cape-mixer/lib/Link/Link'
// import { getLink } from '../Schedule/ShowGroup'

const getLocName = loc => get(find(loc), 'name')
const getShowId = showGroup => get(find(showGroup), 'id')

function ShowDetails({ location, showGroup }) {
  return (
    <ul className="show-details" style={css('m0 p0 lsNone')}>
      <li className="name">
        <h2>
          <LinkEl href={getShowId(showGroup)}>
            { get(find(showGroup), 'name') }
          </LinkEl>
        </h2>
      </li>
      <li className="location" style={css('fs1')}>Showed in: { getLocName(location) }</li>
      <li className="show-dates" style={css('fs1 mt0p5')}>On view: { get(find(showGroup), 'showDate') }</li>
    </ul>
  )
}

ShowDetails.propTypes = {
  // name: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  showGroup: PropTypes.objectOf(PropTypes.object).isRequired,
}
ShowDetails.defaultProps = {
  name: 'Show IV',
  showLocation: 'Some Gallery This person was in...',
  showDates: 'X–Y...',
}

export default ShowDetails

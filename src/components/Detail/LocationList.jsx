import React from 'react'
import PropTypes from 'prop-types'
import { find, map, size } from 'lodash'
import css from 'cape-style'
import Peers from '../Peers/Peers'

import { Reception, Divider, PlaceName, PlaceBuilding, PlaceAddress, PlaceHours, Link } from './styles'


function LocationItem({ location, students }) {
  if (!location) return <p>No location.</p>
  const { name, galleryHours, building, streetAddress, zip } = location
  return (
    <li style={css('mb0p5')}>
      <PlaceName>{name}</PlaceName>
      <PlaceBuilding>{building}</PlaceBuilding>
      <PlaceAddress>
        {streetAddress} {zip}
      </PlaceAddress>
      {galleryHours &&
        <PlaceHours className="openHours" style={css('fs0p75')}>
          Open /<br/> {galleryHours}
        </PlaceHours>
      }
      <Link href='#'>View Students</Link>
      {size(students) > 0 && <Peers students={students} />}
    </li>
  )
}
LocationItem.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    galleryHours: PropTypes.string,
  }),
  students: PropTypes.objectOf(PropTypes.object),
}

function LocationList({ show, reception }) {
  return (
    <div>
      <Divider />
      { reception &&
        <Reception>
          <h3>Reception</h3>
          <p>{ reception }</p>
        </Reception>
      }
      <Divider />
      <ul style={css('lsNone m0 p0 relative')}>
        {map(show, item => (
          <LocationItem key={item.id} location={find(item.location)} students={item.student} />
        ))}
      </ul>
    </div>
  )
}
LocationList.propTypes = {
  reception: PropTypes.string,
  show: PropTypes.objectOf(PropTypes.object),
}

export default LocationList

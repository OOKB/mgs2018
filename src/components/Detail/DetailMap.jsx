import React from 'react'
import PropTypes from 'prop-types'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'

import { map } from 'lodash'
import mapStyles from './map.json'
import LocationItem from './DetailMapLocation'

// eslint-disable-next-line
const DetailMap = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.defaultCenter}
    defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
  >
    { map(props.locations, location => <LocationItem key={location.id} {...location} />) }
  </GoogleMap>
)))


DetailMap.propTypes = {
  // center: PropTypes.object,
  defaultCenter: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  options: PropTypes.shape({
    scrollwheel: PropTypes.bool,
    mapTypeControl: PropTypes.bool,
    streetViewControl: PropTypes.bool,
    zoomControl: PropTypes.bool,
  }),
  locations: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.string),
  togglePin: PropTypes.func,
  zoom: PropTypes.number,
}
DetailMap.defaultProps = {
  defaultCenter: {
    lat: 39.30902,
    lng: -76.62016,
  },
  options: {
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: true,
  },
  zoom: 15,
}
export default DetailMap

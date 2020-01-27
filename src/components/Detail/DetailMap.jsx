import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

import { map } from 'lodash'
import mapStyles from './map.json'
import LocationItem from './DetailMapLocation'
import { MapWrapper } from './styles'

// // eslint-disable-next-line
// const DetailMap = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={props.zoom}
//       defaultCenter={props.defaultCenter}
//       defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
//     >
//       {map(props.locations, location => (
//         <LocationItem key={location.id} {...location} />
//       ))}
//     </GoogleMap>
//   )))

function DetailMap({ defaultCenter, zoom, locations }) {
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCWW7BwZB4inhmk-k5RWdXRo2pD-5X--YA' }}
        center={defaultCenter}
        zoom={zoom}
        options={{ styles: mapStyles, disableDefaultUI: true }}
      >
        {/* <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text={'Kreyser Avrora'}
      /> */}
        {map(locations, (location, i) => (
          <LocationItem
            key={location.id}
            lat={location.lat}
            lng={location.lng}
            i={i + 1}
            {...location}
          />
        ))}
      </GoogleMapReact>
    </MapWrapper>
  )
}

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

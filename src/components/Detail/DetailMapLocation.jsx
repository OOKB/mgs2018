import React from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-google-maps'
import { withTheme } from 'styled-components'
import { MarkerWrapper } from './styles'

const icon = {
  path: 'M13.4999678,0.500075102 C15.9374624,0.500075102 18.187457,1.10944901 20.2499517,2.32819574 C22.3124464,3.54694248 23.9530682,5.18756428 25.171815,7.25005901 C26.3905617,9.31255373 26.9999356,11.5625484 26.9999356,14.0000429 C26.9999356,15.3594143 26.8358739,16.5781621 26.5077493,17.6562842 C26.1796247,18.7344063 25.5468137,20.0937787 24.6093163,21.7343995 C23.9530682,22.8593968 22.5936958,25.0625162 20.531201,28.3437587 L16.3827734,34.8828056 C15.9608994,35.585929 15.3749637,36.0663962 14.6249651,36.3242084 C13.8749666,36.5820207 13.1249691,36.5820207 12.3749705,36.3242084 C11.6249719,36.0663962 11.0390362,35.585929 10.6171622,34.8828056 L6.46873458,28.3437587 C4.40623985,25.0625162 3.04686738,22.8828339 2.3906193,21.8047118 C1.45312189,20.1172158 0.820310902,18.7344063 0.492186327,17.6562842 C0.164061751,16.5781621 0,15.3594143 0,14.0000429 C0,11.5625484 0.609373905,9.31255373 1.82812064,7.25005901 C3.04686738,5.18756428 4.68748918,3.54694248 6.74998391,2.32819574 C8.81247863,1.10944901 11.0624733,0.500075102 13.4999678,0.500075102 Z M13.4999678,33.1249973 L17.9296448,26.0937641 C19.8046406,23.0937709 21.0468245,21.1015885 21.6561984,20.1172158 C22.4530711,18.7109692 22.9804136,17.609409 23.2382258,16.8125362 C23.4960381,16.0156635 23.6249437,15.078165 23.6249437,14.0000429 C23.6249437,12.1719223 23.1679135,10.4844263 22.2538532,8.93755499 C21.3397929,7.39068367 20.1093271,6.16021786 18.5624557,5.24615754 C17.0155844,4.33209722 15.3280885,3.87506706 13.4999678,3.87506706 C11.6718472,3.87506706 9.9843512,4.33209722 8.43747988,5.24615754 C6.89060857,6.16021786 5.66014276,7.39068367 4.74608243,8.93755499 C3.83202211,10.4844263 3.37499195,12.1719223 3.37499195,14.0000429 C3.37499195,15.078165 3.50389754,16.0273815 3.76170978,16.8476924 C4.01952202,17.6680033 4.5703016,18.7812815 5.41404959,20.1875282 C5.97654825,21.1719008 7.19529499,23.1640832 9.07029087,26.1640764 C10.8515363,28.9296945 12.3280952,31.2500014 13.4999678,33.1249973 Z',
  fillColor: 'blue',
  fillOpacity: 1,
  strokeWeight: 0,
}

const mapIconUrl = '../../map-marker.svg'

function DetailMapLocation({ lat, lng, building, name, streetAddress, zip, galleryHours, theme}) {

  function colorIcon(color) {
    icon.fillColor = color
    return icon
  }

  return (
    <MarkerWrapper>
      <Marker
        position={{ lat, lng }}
        icon={colorIcon(theme.color)}
        defaultOptions={{ optimized: false }}
        color={theme.color}
        onIconChanged={console.log('???change please')}
      >
        {/* <InfoWindow
          defaultOptions={{ disableAutoPan: true }}
          position={{ lat, lng }}
        >
          <h1>TEST</h1>
        </InfoWindow> */}
      </Marker>
    </MarkerWrapper>
    // <div className="galleryLocation">
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="24"
    //     height="24"
    //     viewBox="0 0 24 24"
    //     style={{
    //       cursor: 'pointer',
    //     }}
    //   >
    //     <path style={{ fill: '#322b00' }} d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.66 5.38-1.077 1.275-2.302 2.723-3.34 4.698-1.038-1.976-2.263-3.423-3.34-4.697C7.057 11.09 6 9.84 6 7.603 6 4.617 8.804 2 12 2zm0-2C7.802 0 4 3.403 4 7.602c0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398C20 3.402 16.2 0 12 0zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    //   </svg>
    //   <div className="mapPopup">
    //     <h3 style={css('m0 mb0p5')} >{name}</h3>
    //     <p className="building" style={css('m0 mb0p5')} >
    //       {building}
    //     </p>
    //     <p className="address" style={css('m0 mb0p5')} >
    //       {streetAddress}
    //       <br />
    //       {zip}
    //     </p>
    //     {galleryHours && <div className="openHours">
    //       <strong>Gallery Hours:</strong>
    //       {galleryHours}
    //     </div>}
    //   </div>
    // </div>

  )
}

DetailMapLocation.propTypes = {
  building: PropTypes.string,
  name: PropTypes.string,
  streetAddress: PropTypes.string,
  zip: PropTypes.string,
  galleryHours: PropTypes.string,
}
DetailMapLocation.defaultProps = {
}
export default withTheme(DetailMapLocation)

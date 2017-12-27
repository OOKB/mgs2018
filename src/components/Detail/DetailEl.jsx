import React from 'react'
import PropTypes from 'prop-types'
import { map, size } from 'lodash'
import css from 'cape-style'
// import './Detail.css'
import DetailMap from './DetailMap'
import LocationList from './LocationList'
import StudentLink from '../Peers/StudentLink'
import Logo from '../Logo/Logo'
import Wrapper from '../Wrapper/WrapperEl'

import mgsLogo from '../../mgs2018logoarrow.svg'

import { MapWrapper, MapContainer, InfoContainer, Title, Subtitle, Description, NameLink, Divider, Back, Loading } from './styles'

function AllStudents({ program }) {
  return (
    <div>
      <Divider />
      <ul style={css('m0 mt1 p0 lsNone')} >
        {size(program) > 0 && map(program, ({ students }) => map(students, student => (
          <NameLink hasDetail={student.hasDetail} key={student.id}>
            <StudentLink {...student}><span className="name">{student.name}</span></StudentLink>
          </NameLink>
        ))
        )}
      </ul>
    </div>
  )
}
AllStudents.propTypes = {
  program: PropTypes.objectOf(PropTypes.object).isRequired,
}

function DetailEl({ showGroup, detailClose }) {
  if (!showGroup) return <div><Loading className="flex loading">loading...</Loading>{close}</div>
  const {
    description, extraChild, id, name, lat, lng, locations, program,
    reception, show, showDate, zoom,
  } = showGroup
  const isShowThree = id === 'recLTqHoop0NcGOrb'
  return (
    <Wrapper>
      <Back onClick={detailClose}>
        <Logo primary sttc left logoSrc={mgsLogo} siteName="MICA Grad Show 2018" />
      </Back>
      <detail className={id} >
        <div className="flex">
          <MapWrapper>
            <MapContainer>
              <DetailMap
                defaultCenter={lat ? { lat, lng } : undefined}
                zoom={zoom}
                locations={locations}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCWW7BwZB4inhmk-k5RWdXRo2pD-5X--YA&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '0', paddingBottom: '100%', position: 'relative' }} />}
                mapElement={<div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />}
              />
            </MapContainer>
            <div>
              { size(show) > 0 && map(show, ({ documentation }) => map(documentation, item => (
                <img src={item.url} />
              )))}
            </div>
          </MapWrapper>
          <InfoContainer>
            <Title>{ name }</Title>
            { showDate && <Subtitle className="dateRange">{ showDate }</Subtitle>}
            { description && <Description className="description">{ description }</Description>}
            <LocationList show={show} reception={reception} />
            {extraChild &&
              <LocationList show={extraChild.show} reception={extraChild.reception} />
            }
            {isShowThree && program && <AllStudents program={program} />}
          </InfoContainer>
        </div>
      </detail>
    </Wrapper>
  )
}
DetailEl.propTypes = {
  showGroup: PropTypes.shape({
    description: PropTypes.string,
    gallery: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    ongoing: PropTypes.bool,
    program: PropTypes.object.isRequired,
    receptionDate: PropTypes.string,
    showDate: PropTypes.string,
    name: PropTypes.string.isRequired,
    zoom: PropTypes.number,
  }),
  detailClose: PropTypes.func.isRequired,
}
DetailEl.defaultProps = {
}
export default DetailEl

import React from 'react'
import PropTypes from 'prop-types'
import { find, map, size } from 'lodash'
import css from 'cape-style'
import Close from 'cape-mixer/lib/CloseButton'
// import './Detail.css'
import LocationList from './LocationList'
import StudentLink from '../StudentLink'
import Wrapper from '../Wrapper/WrapperEl'
import DetailMap from './DetailMap'

import { InfoContainer, ReceptionContainer, FlexColumn, FlexRow, MapContainer } from './styles'

function getFirstProgram(programs) {
  if (!size(programs)) return null
  return find(programs)
}
function programStudents(program) {
  return program && program.students
}

function Show({ allStudentsIn, name, student }) {
  const program = getFirstProgram(allStudentsIn)
  const students = student || programStudents(program)
  return (
    <ul style={css('m0 mt1 p0 lsNone')} >
      <h4 style={css('m0 mb0p5')} >{name}</h4>
      {size(students) > 0 && map(students, item =>
        <li key={item.id}>
          <StudentLink {...item}>
            <span className="name"><strong>{ item.name }</strong></span>
          </StudentLink>
        </li>
      )}
    </ul>
  )
}
Show.propTypes = {
  allStudentsIn: PropTypes.objectOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  student: PropTypes.objectOf(PropTypes.object),
}

function DetailEl({ showGroup, detailClose }) {
  const close = <Close icon="times-btl" onClick={detailClose} style={css('absolute')} />
  if (!showGroup) return <div><p className="flex loading">loading...</p> {close}</div>
  const {
    description, extraChild, name, lat, lng, locations, reception, show, showDate, zoom,
  } = showGroup

  return (
    <Wrapper className={showGroup.id} >
      {close}
      <FlexRow>
        <FlexColumn>
          <MapContainer>
          <DetailMap
            defaultCenter={lat ? { lat, lng } : undefined}
            zoom={zoom}
            locations={locations}
          />
          </MapContainer>
          <InfoContainer>
            <h1 style={css('m0')}>{ name }</h1>
            { showDate && <p className="dateRange" style={css('m0 fs2')}>{ showDate }</p>}
            { description && <p className="description">{ description }</p>}
            { reception && <p className="reception">{ reception }</p>}
          </InfoContainer>
        </FlexColumn>
        <ReceptionContainer className="mainContent" style={css('relative')}>
          <LocationList show={show} reception={reception} />
          {extraChild &&
            <LocationList show={extraChild.show} reception={extraChild.reception} />
          }
        </ReceptionContainer>
      </FlexRow>
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

import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import Close from 'cape-mixer/lib/CloseButton'
import StudentInfo from './StudentInfo'
import ShowInfo from './ShowInfo'
import ProgramList from './ProgramList'
import Wrapper from '../Wrapper/WrapperEl'
import ImageStack from './ImageStack'
import NoImages from './NoImages'

import { ImageContainer, InfoContainer, Divider } from './styles'

function StudentDetail({ closePopup, student }) {
  const close = <Close icon="times-btl" onClick={closePopup} style={css('absolute')} />
  return (
    <Wrapper>
      {!student && <p className="flex loading">loading...</p>}
      {student &&
        <div className="wrapper flex">
          {close}

          <ImageContainer>
            { student.art && student.art.length > 0 && <ImageStack collection={student.art} /> }
            { student.art.length === 0 && <NoImages /> }
          </ImageContainer>

          <InfoContainer>
            <StudentInfo {...student} />
            <Divider />
            <ShowInfo {...student.show} />
            <Divider />
            <ProgramList {...student.program} />
          </InfoContainer>


        </div>
      }
    </Wrapper>
  )
}
StudentDetail.propTypes = {
  closePopup: PropTypes.func.isRequired,
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
}
StudentDetail.defaultProps = {
  student: null,
}
export default StudentDetail

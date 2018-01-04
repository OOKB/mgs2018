import React from 'react'
import PropTypes from 'prop-types'
// import css from 'cape-style'
import StudentInfo from './StudentInfo'
import ShowInfo from './ShowInfo'
import ProgramList from './ProgramList'
import Wrapper from '../Wrapper/WrapperEl'
import ImageStack from './ImageStack'
import ImageHeaderMobile from './ImageHeaderMobile'
import ImageStackMobile from './ImageStackMobile'
import NoImages from './NoImages'
import Logo from '../Logo/Logo'

import mgsLogo from '../../mgs2018logoarrow.svg'

import { Flex, ImageContainer, InfoContainer, Divider, Back, Loading } from './styles'

function StudentDetail({ closePopup, student }) {
  return (
    <Wrapper>
      <Back onClick={closePopup}>
        <Logo primary left logoSrc={mgsLogo} siteName="MICA Grad Show 2018" />
      </Back>
      {!student && <Loading className="flex loading">loading...</Loading>}
      {student &&
        <Flex>

          <ImageContainer>
            { student.art && student.art.length > 0 && <ImageStack collection={student.art} /> }
            { student.art && student.art.length > 0 && <ImageHeaderMobile collection={student.art} /> }
            { !student.art && <NoImages /> }
          </ImageContainer>

          <InfoContainer>
            <StudentInfo {...student} />
            <Divider />
            { student.show &&
              <div>
                <ShowInfo {...student.show} />
                <Divider />
              </div>
            }
            { student.art && student.art.length > 0 && <ImageStackMobile collection={student.art} /> }
            <ProgramList {...student.program} />
          </InfoContainer>

        </Flex>
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

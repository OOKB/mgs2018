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
  const hasArt = student.art && student.art.length > 0
  return (
    <Wrapper>
      <Back onClick={closePopup}>
        <Logo primary left logoSrc={mgsLogo} siteName="MICA Grad Show 2018" />
      </Back>
      {!student && <Loading className="flex loading">loading...</Loading>}
      {student &&
        <Flex>

          <ImageContainer>
            { hasArt && <ImageStack collection={student.art} /> }
            { hasArt && <ImageHeaderMobile collection={student.art} /> }
            { !hasArt && <NoImages /> }
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
            { hasArt && <ImageStackMobile collection={student.art} /> }
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

import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import css from 'cape-style'
import HomeWrapper from '../Home/HomeWrapper'
import Search from '../Search/Search'
import FilterSelect from '../FilterSelect'
import Student from './Student'

import { GroupHeader, CustomSelect } from './styles'

function StudentListEl({ programOptions, students }) {
  const collectionId = 'Student'
  return (
    <HomeWrapper>
      <article id="studentList" className="text-left" style={css('pl1p5 pr1p5')}>
        <header>
          <div className="" style={css('flex')}>
            <Search collectionId={collectionId} style={css('flexAuto')} />
            {programOptions &&
              <CustomSelect className="customSelect" style={css('flexAuto')}>
                <FilterSelect
                  collectionId={collectionId}
                  fieldId="program"
                  options={programOptions}
                  firstOptionName="All Programs"
                />
              </CustomSelect>
            }
          </div>
        </header>

        <section>
          <ul className="student-list">
            <li className="student header hidden-sm">
              <GroupHeader className="name"><strong>Name</strong></GroupHeader>
              <GroupHeader className="program"><strong>Program</strong></GroupHeader>
              <GroupHeader className="show"><strong>Show</strong></GroupHeader>
              <GroupHeader className="social" />
            </li>
            {map(students, item => <Student key={item.id} {...item} />)}
          </ul>
        </section>
      </article>
    </HomeWrapper>
  )
}

StudentListEl.propTypes = {
  students: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.object),
  ]),
  programOptions: PropTypes.arrayOf(PropTypes.object),
}
StudentListEl.defaultProps = {
}
export default StudentListEl

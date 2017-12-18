import { connect } from 'react-redux'
import { structuredSelector } from 'cape-select'
import { showGroupByName } from './'
import Component from './ScheduleSlideEl'

const mapStateToProps = structuredSelector({
  showGroups: showGroupByName,
})

export default connect(mapStateToProps)(Component)

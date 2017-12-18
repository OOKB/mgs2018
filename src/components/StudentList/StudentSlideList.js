import { connect } from 'react-redux'
import { structuredSelector } from 'cape-select'
import { programOptions } from '../../select/program'

import { itemsSearched } from './'
import Component from './StudentSlideListEl'

const getState = structuredSelector({
  students: itemsSearched,
  programOptions,
})

export default connect(getState)(Component)

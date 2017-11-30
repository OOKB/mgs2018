import { connect } from 'react-redux'
import { auth } from 'cape-firebase'
import { createStructuredSelector } from 'reselect'
import Component from './HomeWrapperEl'
import { getAuth } from '../../select/tempmenu'
import { getSiteName } from '../../select/site'
import { collageArt } from '../../select/art'

const getState = createStructuredSelector({
  art: collageArt,
  login: getAuth,
  siteName: getSiteName,
})
const actions = {
  loginAction: auth,
}

export default connect(getState, actions)(Component)

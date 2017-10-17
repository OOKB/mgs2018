import { connect } from 'react-redux'
import { auth } from 'cape-firebase'
import { createStructuredSelector } from 'reselect'
import Component from './SplashEl'
import { getAuth } from '../select/menu'
import { getSiteName } from '../select/site'

const getState = createStructuredSelector({
  login: getAuth,
  siteName: getSiteName,
})
const actions = {
  loginAction: auth,
}

export default connect(getState, actions)(Component)

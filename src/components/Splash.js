import { connect } from 'react-redux'
import { auth } from 'cape-firebase'
import { createStructuredSelector } from 'reselect'
import Component from './SplashEl'
import { getAuth } from '../select/menu'
import { getSiteName } from '../select/site'
import { splashArt } from '../select/art'

const getState = createStructuredSelector({
  art: splashArt,
  login: getAuth,
  siteName: getSiteName,
})
const actions = {
  loginAction: auth,
}

export default connect(getState, actions)(Component)

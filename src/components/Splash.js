import { connect } from 'react-redux'
import { auth } from 'cape-firebase'
import { createStructuredSelector } from 'reselect'
import Component from './SplashEl'
import { getAuth } from '../select/menu'

const getState = createStructuredSelector({
  login: getAuth,
})
const actions = {
  loginAction: auth,
}

export default connect(getState, actions)(Component)

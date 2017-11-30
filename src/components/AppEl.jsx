import React from 'react'
// import css from 'cape-style'
import './App.css'
import Page from './Page'
import Collage from './Collage/Collage'
import Schedule from './Schedule/Schedule'

function AppEl() {
  return (
    <Page className="App">
      <Collage />
      <Schedule />
    </Page>
  )
}
AppEl.propTypes = {
}
export default AppEl

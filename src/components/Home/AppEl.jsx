import React from 'react'
import Page from '../Page'
// import Collage from '../Collage/Collage'
import Schedule from '../Schedule/Schedule'
import Menu from './Menu'

function AppEl() {
  return (
    <Page className="App">
      {/* <Collage /> */}
      <Menu />
      <Schedule />
    </Page>
  )
}
AppEl.propTypes = {
}
export default AppEl

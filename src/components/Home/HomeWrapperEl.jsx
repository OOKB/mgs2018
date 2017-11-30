import React from 'react'
import Page from '../Page'
// import Collage from '../Collage/Collage'
import Menu from './Menu'
import Blurb from '../Blurb/Blurb'

function HomeWrapperEl({ children }) {
  return (
    <Page className="App">
      {/* <Collage /> */}
      <Blurb siteName='MICA GRAD' />
      <Menu />
      {children}
    </Page>
  )
}
HomeWrapperEl.propTypes = {
}
export default HomeWrapperEl

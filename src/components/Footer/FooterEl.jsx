import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import micaLogo from '../../micalogo.svg'
// import './Footer.css'
import Links from './Links'
import Menu from '../Header/Menu'
import { Wrapper, Footer, Chunk, Atag, MicaLogo } from './styles'

function FooterEl({ archive, siteId, social }) {
  return (
    <Wrapper>
      <Footer>
        <Chunk>
          <a href="http://www.mica.edu/?utm_source=mica%20grad%20show2017">
            <MicaLogo src={micaLogo} alt="MICA logo" />
          </a>
        </Chunk>
        <Chunk>
          <ul style={css('lsNone m0 p0')}>
            <li><Atag href="http://www.micagradcommunity.org/?utm_source=mica%20grad%20show2017">Office of Graduate Studies</Atag></li>
            <li>131 West North Avenue</li>
            <li>Baltimore, MD 21201</li>
            <li>(410) 225-5274</li>
          </ul>
        </Chunk>
        <Chunk>
          <ul style={css('lsNone m0 p0')}>
            <li><Atag href="https://www.mica.edu/Admission_and_Financial_Aid/Graduate_Admission_and_Financial_Aid.html?utm_source=mica%20grad%20show2017">MICA Graduate Admissions</Atag></li>
            <li><Atag href="http://micagradstudies.tumblr.com/?utm_source=mica%20grad%20show2017">MICA Grad Show Blog</Atag></li>
            <li><Atag href="http://eepurl.com/bciqMT">Sign up for the MICA Grad Show mailing list</Atag></li>
            <li><Atag href="http://www.micagradcommunity.org/?utm_source=mica%20grad%20show2017">MICA Grad Community</Atag></li>
          </ul>
        </Chunk>
        <Chunk>
          {archive && <Links className="archive" title="Archive" links={archive} siteId={siteId} />}
        </Chunk>
        <Chunk columns>
          <Menu />
          {social && <Links className="social" links={social} />}
        </Chunk>
      </Footer>
    </Wrapper>
  )
}
FooterEl.propTypes = {
  archive: PropTypes.array,
  siteId: PropTypes.string,
  social: PropTypes.array,
}
FooterEl.defaultProps = {
}
export default FooterEl

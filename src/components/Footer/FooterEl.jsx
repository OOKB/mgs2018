import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import micaLogo from '../../micaLogo18.svg'
// import './Footer.css'
import Links from './Links'
import Menu from '../Header/Menu'
import { Wrapper, Footer, Chunk, Atag, MicaLogo, FlexList, ListItem, MenuWrapper } from './styles'

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
          <FlexList columns>
            <ListItem><Atag href="http://www.micagradcommunity.org/?utm_source=mica%20grad%20show2017">Office of Graduate Studies</Atag></ListItem>
            <ListItem>131 West North Avenue</ListItem>
            <ListItem>Baltimore, MD 21201</ListItem>
            <ListItem>(410) 225-5274</ListItem>
          </FlexList>
        </Chunk>
        <Chunk>
          <FlexList columns>
            <ListItem><Atag href="https://www.mica.edu/Admission_and_Financial_Aid/Graduate_Admission_and_Financial_Aid.html?utm_source=mica%20grad%20show2017">MICA Graduate Admissions</Atag></ListItem>
            <ListItem><Atag href="http://micagradstudies.tumblr.com/?utm_source=mica%20grad%20show2017">MICA Grad Show Blog</Atag></ListItem>
            <ListItem><Atag href="http://eepurl.com/bciqMT">Sign up for the MICA Grad Show mailing list</Atag></ListItem>
            <ListItem><Atag href="http://www.micagradcommunity.org/?utm_source=mica%20grad%20show2017">MICA Grad Community</Atag></ListItem>
          </FlexList>
        </Chunk>
        <Chunk mw="10rem">
          <FlexList wrap>
            {map(archive, (item, index) =>
              <ListItem><Atag key={index} href={item.link}>{item.title}</Atag></ListItem>
            )}
          </FlexList>
        </Chunk>
        <Chunk columns>
          <MenuWrapper>
            <Menu />
          </MenuWrapper>
          {social && <Links links={social} />}
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

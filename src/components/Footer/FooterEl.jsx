import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import micaLogo from '../../micaLogo18.svg'
import Links from './Links'
import Menu from '../Home/Menu'
import { Wrapper, Footer, Chunk, Atag, MicaLogo, FlexList, ListItem, MenuWrapper } from './styles'

function FooterEl({ archive, social }) {
  return (
    <Wrapper>
      <Footer>
        <Chunk mdOrder="1" lgOrder="1">
          <a href="http://www.mica.edu/?utm_source=mica%20grad%20show2017">
            <MicaLogo src={micaLogo} alt="MICA logo" />
          </a>
        </Chunk>
        <Chunk mdOrder="3" lgOrder="4">
          <FlexList columns>
            <ListItem link><Atag href="http://www.micagradcommunity.org/?utm_source=mica%20grad%20show2017">Office of Graduate Studies</Atag></ListItem>
            <ListItem>131 West North Avenue</ListItem>
            <ListItem>Baltimore, MD 21201</ListItem>
            <ListItem>(410) 225-5274</ListItem>
          </FlexList>
        </Chunk>
        <Chunk mdOrder="5" lgOrder="2" span>
          <FlexList columns>
            <ListItem link><Atag href="https://www.mica.edu/Admission_and_Financial_Aid/Graduate_Admission_and_Financial_Aid.html?utm_source=mica%20grad%20show2017">MICA Graduate Admissions</Atag></ListItem>
            <ListItem link><Atag href="http://micagradstudies.tumblr.com/?utm_source=mica%20grad%20show2017">MICA Grad Show Blog</Atag></ListItem>
            <ListItem link><Atag href="http://eepurl.com/bciqMT">Sign up for the MICA Grad Show mailing list</Atag></ListItem>
            <ListItem link><Atag href="http://www.micagradcommunity.org/?utm_source=mica%20grad%20show2017">MICA Grad Community</Atag></ListItem>
          </FlexList>
        </Chunk>
        <Chunk mw="10rem" start mdOrder="2" lgOrder="3">
          <FlexList wrap>
            <ListItem title link>Archive</ListItem>
            {map(archive, (item, index) => (
              <ListItem num key={index}>
                <Atag key={index} href={item.link}>{item.title}</Atag>
              </ListItem>
            ))}
          </FlexList>
        </Chunk>
        <Chunk columns start mdOrder="4" lgOrder="5">
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
  archive: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  social: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      className: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
  })),
}
FooterEl.defaultProps = {
  archive: null,
  social: null,
}
export default FooterEl

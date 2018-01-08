import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import LinkEl from 'cape-mixer/lib/Link/Link'
import Select from 'cape-mixer/lib/SelectEl'

import { getShowId } from '../Schedule/ShowGroup'
import StudentLink from '../Peers/StudentLink'

import { GroupBody, Cell, CellImage } from './styles'

function StudentEl(props) {
  const {
    id, art, name, show, url, email, program, saveShow, shows, showGroup,
    facebook, instagram, soundcloud, twitter, vimeo, youtube, hasDetail,
  } = props
  const emailStr = `mailto:${email}`
  const facebookStr = `https://www.facebook.com/${facebook}`
  const instagramStr = `https://www.instagram.com/${instagram}`
  const soundcloudStr = `https://www.soundcloud.com/${soundcloud}`
  const twitterStr = `https://www.twitter.com/${twitter}`
  const vimeoStr = `https://www.vimeo.com/${vimeo}`
  const youtubeStr = `https://www.youtube.com/${youtube}`
  const showId = get(show, 'id')
  return (
    <GroupBody id={id}>
      <Cell className="name">
        <StudentLink hasDetail={hasDetail} id={id}><strong>{ name }</strong></StudentLink>
      </Cell>
      <Cell className="program">
        { program.name }
      </Cell>
      <Cell className="show">
        {show && (
          <p>
            <LinkEl routeId="details" showId={getShowId(showGroup)} top>{ showGroup.name }</LinkEl>
          </p>
        )}
        {shows && <Select options={shows} onChange={saveShow} value={showId} />}
      </Cell>
      <Cell className="social">
        <div>
          { url && <LinkEl href={url} icon="web" /> }
          { email && <LinkEl href={emailStr} icon="email" /> }
          { facebook && <LinkEl href={facebookStr} icon="facebook" /> }
          { instagram && <LinkEl href={instagramStr} icon="instagram" /> }
          { soundcloud && <LinkEl href={soundcloudStr} icon="soundcloud" /> }
          { twitter && <LinkEl href={twitterStr} icon="twitter" /> }
          { vimeo && <LinkEl href={vimeoStr} icon="vimeo" /> }
          { youtube && <LinkEl href={youtubeStr} icon="youtube" /> }
        </div>
      </Cell>
      { art && art.length > 0 &&
        <CellImage
          srcSet={`${art[0].image.url}?w=1280 1280w,
                   ${art[0].image.url}?w=1024 1024w,
                   ${art[0].image.url}?w=768 768w,
                   ${art[0].image.url}?w=512 512w`}
          src={art[0].image.url}
          sizes="35rem"
          title={art[0].image.title}
          alt={art[0].image.alt || art[0].image.title}
        />
      }
    </GroupBody>
  )
}

StudentEl.propTypes = {
  // art: PropTypes.objectOf(PropTypes.)
  hasDetail: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  program: PropTypes.shape({
    name: PropTypes.string,
  }),
  show: PropTypes.shape({
    name: PropTypes.string,
  }),
  showGroup: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  shows: PropTypes.objectOf(PropTypes.string),
  url: PropTypes.string,
  email: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  saveShow: PropTypes.func.isRequired,
  soundcloud: PropTypes.string,
  twitter: PropTypes.string,
  vimeo: PropTypes.string,
  youtube: PropTypes.string,
}
StudentEl.defaultProps = {
  hasDetail: false,
}
export default StudentEl

import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'
import LinkEl from 'cape-mixer/lib/Link/Link'
import marked from 'marked'

import { Title, Subtitle, Description } from './styles'

function StudentInfo(props) {
  const {
    familyName, givenName, name, statement, url, email, program,
    facebook, instagram, soundcloud, twitter, vimeo, youtube,
  } = props
  const displayName = `${givenName} ${familyName}`
  const emailStr = `mailto:${email}`
  const facebookStr = `https://www.facebook.com/${facebook}`
  const instagramStr = `https://www.instagram.com/${instagram}`
  const soundcloudStr = `https://www.soundcloud.com/${soundcloud}`
  const twitterStr = `https://www.twitter.com/${twitter}`
  const vimeoStr = `https://www.vimeo.com/${vimeo}`
  const youtubeStr = `https://www.youtube.com/${youtube}`

  return (
    <div>
      {!name && <Title>{ displayName }</Title> }
      {name && <Title>{ name }</Title> }
      {program && <Subtitle>{ program.name }</Subtitle>}
      <div className="social">
        <ul style={css('m0 mt0p5 p0 lsNone flex fs1p5')}>
          {url && <li style={css('mr0p5')}><LinkEl href={url} icon="web" /></li>}
          {email && <li style={css('mr0p5')}><LinkEl href={emailStr} icon="email" /></li>}
          {facebook && <li style={css('mr0p5')}><LinkEl href={facebookStr} icon="facebook" /></li>}
          {instagram && <li style={css('mr0p5')}><LinkEl href={instagramStr} icon="instagram" /></li>}
          {soundcloud && <li style={css('mr0p5')}><LinkEl href={soundcloudStr} icon="soundcloud" /></li>}
          {twitter && <li style={css('mr0p5')}><LinkEl href={twitterStr} icon="twitter" /></li>}
          {vimeo && <li style={css('mr0p5')}><LinkEl href={vimeoStr} icon="vimeo" /></li>}
          {youtube && <li style={css('mr0p5')}><LinkEl href={youtubeStr} icon="youtube" /></li>}
        </ul>
      </div>
      { statement &&
        <Description
          className="statement"
          dangerouslySetInnerHTML={{ __html: marked(statement) }}
        />
      }
    </div>
  )
}

StudentInfo.propTypes = {
  email: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  instagram: PropTypes.string,
  name: PropTypes.string.isRequired,
  statement: PropTypes.string,
  program: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  soundcloud: PropTypes.string,
  twitter: PropTypes.string,
  url: PropTypes.string,
  vimeo: PropTypes.string,
  youtube: PropTypes.string,
}
StudentInfo.defaultProps = {
  statement: null,
  facebook: null,
  instagram: null,
  soundcloud: null,
  twitter: null,
  url: null,
  vimeo: null,
  youtube: null,
}
export default StudentInfo

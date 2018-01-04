import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'

import Video from './Video'

function SlideThumb({ alt, src, title, handleClick, videoInfo, width }) {
  return (
    <li style={css('mb1')}>
      { videoInfo && videoInfo.url ? <Video {...videoInfo} /> : (
        <div>
          <img src={`${src}?w=${width}`} title={title} alt={alt || title} onClick={handleClick} />
        </div>
      )}
    </li>
  )
}

SlideThumb.propTypes = {
  alt: PropTypes.string,
  classNames: PropTypes.object,
  handleClick: PropTypes.func,
  src: PropTypes.string,
  title: PropTypes.string,
  videoInfo: PropTypes.object,
  width: PropTypes.string,
}
SlideThumb.defaultProps = {
  alt: null,
  handleClick: null,
  src: null,
  title: null,
  width: '1200',
}
export default SlideThumb

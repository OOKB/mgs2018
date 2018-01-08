import React from 'react'
import PropTypes from 'prop-types'
import css from 'cape-style'

import Video from './Video'

function SlideThumb({ alt, src, title, handleClick, videoInfo, width }) {
  return (
    <li style={css('mb1')}>
      { videoInfo && videoInfo.url ? <Video {...videoInfo} /> : (
        <div>
          <img
            srcSet={`${src}?w=2048 2048w,
                     ${src}?w=1792 1792w,
                     ${src}?w=1536 1536w,
                     ${src}?w=1280 1280w,
                     ${src}?w=1024 1024w,
                     ${src}?w=768 768w,
                     ${src}?w=512 512w`}
            src={src}
            sizes="(min-width: 48rem) 50vw, 100vw"
            title={title}
            alt={alt || title}
            onClick={handleClick}
          />
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

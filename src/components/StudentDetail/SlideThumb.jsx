import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Video from './Video'

function SlideThumb({ alt, classNames, src, title, handleClick, videoInfo, width }) {
  return (
    <li className={classnames(classNames)}>
      { videoInfo && videoInfo.url ? <Video {...videoInfo} /> : (
        <img src={`${src}?w=${width}`} title={title} alt={alt || title} onClick={handleClick} />
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

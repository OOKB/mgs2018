import React from 'react'
import { first } from 'lodash'
import css from 'cape-style'

import SlideThumb from './SlideThumb'

function ImageHeaderMobile({ collection }) {
  const filter = first(collection)
  return (
    <ul className="image-header-mobile" style={css('m0 p0 lsNone')}>
      <SlideThumb
        key={filter.id}
        src={filter.image.url}
        title={filter.title}
        videoInfo={filter.videoInfo}
        handleClick={filter.handleClick}
        width={filter.width}
        event={filter.event}
        person={filter.person}
      />
    </ul>
  )
}

export default ImageHeaderMobile

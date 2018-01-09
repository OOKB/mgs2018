import React from 'react'
import { first, toArray } from 'lodash'
import css from 'cape-style'

import SlideThumb from './SlideThumb'

function ImageHeaderMobile({ collection }) {
  const aaa = toArray(collection)
  const filter = first(aaa)
  return (
    <ul className="image-header-mobile" style={css('m0 p0 lsNone')}>
      <SlideThumb
        key={filter.id}
        src={filter.url ? filter.url : filter.image.url}
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

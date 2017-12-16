import React from 'react'
import { map, slice } from 'lodash'
import css from 'cape-style'

import SlideThumb from './SlideThumb'

function ImageStackMobile({ collection }) {

  return (
    <ul className="image-stack-mobile" style={css('m0 p0 lsNone')}>
      {map(slice(collection, 1), item => (
        <SlideThumb
          key={item.id}
          src={item.image.url}
          title={item.title}
          videoInfo={item.videoInfo}
          handleClick={item.handleClick}
          width={item.width}
          event={item.event}
          person={item.person}
        />
      ))}
    </ul>
  )
}

export default ImageStackMobile

import React from 'react'
import { map } from 'lodash'
import css from 'cape-style'

import SlideThumb from './SlideThumb'

function ImageStack({ collection }) {
  return (
    <ul className="image-stack" style={css('m0 p0 lsNone')}>
      {map(collection, item => (
        <SlideThumb
          key={item.id}
          src={item.url ? item.url : item.image.url}
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

export default ImageStack

import React from 'react'
import { map } from 'lodash'
import css from 'cape-style'

import SlideThumb from './SlideThumb'
import { ImageContainer } from './styles'

function ImageStack({ collection }) {

  return (
    <ul style={css('m0 p0 lsNone')}>
      {map(collection, item => (
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

export default ImageStack

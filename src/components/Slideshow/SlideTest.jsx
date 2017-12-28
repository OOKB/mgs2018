import React from 'react'
import { Swiper, Slide } from 'react-dynamic-swiper'
import { map } from 'lodash'
import 'react-dynamic-swiper/lib/styles.css'

import { SliderWrapper, ImageTest, Test, TestWrap } from './styles'

function SlideTest({ collection }) {
  return (
    <TestWrap>
      <Test>
        <SliderWrapper>
          <Swiper
            swiperOptions={{
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 60,
              autoplay: 3500,
            }}
          >
            { map(collection, (item) => (
              <Slide>
                <ImageTest src={item.image.url} />
              </Slide>
            ))}
          </Swiper>
        </SliderWrapper>
      </Test>
    </TestWrap>
  )
}

export default SlideTest

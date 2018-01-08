import React, { Component } from 'react'
import { Swiper, Slide } from 'react-dynamic-swiper'
import { map } from 'lodash'
import 'react-dynamic-swiper/lib/styles.css'

import StudentLink from '../Peers/StudentLink'
import Refresh from './Refresh'

import { SliderWrapper, ImageTest, Test, TestWrap, Caption, CaptionItem } from './styles'

const arrowIcon = `
<svg width="33px" height="22px" viewBox="0 0 33 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
<desc>Created with Sketch.</desc>
<defs></defs>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="6" transform="translate(-1305.000000, -798.000000)" fill="#0047BB">
        <g id="Group-6" transform="translate(1065.000000, 773.000000)">
            <polygon id="→" points="258.7 25.58 268.42 35.165 240.25 35.165 240.25 37.415 268.375 37.415 258.7 47 262.075 47 272.74 36.29 262.075 25.58"></polygon>
        </g>
    </g>
</g>
</svg>`

class SlideTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('click')
  }

  render() {
    const { collection } = this.props
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
                grabCursor: true,
              }}
              navigation={false}
              pagination={false}
            >
              { map(collection, (item) => (
                <Slide>
                  <ImageTest src={item.image.url} />
                  <StudentLink hasDetail id={item.studentId}>
                    <Caption flex>
                      <section>
                        { item.studentName && <CaptionItem bold caps>{item.studentName}</CaptionItem> }
                        { item.title && <CaptionItem italic>{item.title}</CaptionItem> }
                        { item.person &&
                          <CaptionItem>
                            { item.person.name && <span>{item.person.name}</span> }
                            { item.person.program && <span>, {item.person.program}</span> }
                          </CaptionItem>
                        }
                      </section>
                      <section dangerouslySetInnerHTML={{ __html: arrowIcon }} />
                    </Caption>
                  </StudentLink>
                </Slide>
              ))}
            </Swiper>
            <Refresh prefix="art-refresh" />
          </SliderWrapper>
        </Test>
      </TestWrap>
    )
  }
}

export default SlideTest

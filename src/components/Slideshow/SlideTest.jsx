import React, { Component } from "react";
import { Swiper, Slide } from "react-dynamic-swiper";
import { map } from "lodash";
import "react-dynamic-swiper/lib/styles.css";

import StudentLink from "../Peers/StudentLink";
import Refresh from "./Refresh";

import {
  Loading,
  SliderWrapper,
  PlaceholderWrapper,
  ImageTest,
  Test,
  TestWrap,
  Caption,
  CaptionItem
} from "./styles";

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
</svg>`;

class SlideTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.isLoaded = this.isLoaded.bind(this);
  }

  handleClick() {
    console.log("click");
  }

  isLoaded() {
    this.setState({ loading: false });
  }

  render() {
    const { collection } = this.props;
    const { loading } = this.state;
    return (
      <TestWrap>
        <Test>
          <PlaceholderWrapper loading={loading}>
            <div />
            <div />
            <div />
          </PlaceholderWrapper>
          <Loading loading={loading} className="flex loading">
            loading...
          </Loading>
          <SliderWrapper loading={loading}>
            <Swiper
              swiperOptions={{
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 60,
                initialSlide: 0,
                autoplay: 4500,
                loop: true,
                grabCursor: true
              }}
              navigation={false}
              pagination={false}
              onAutoplay={() => this.isLoaded()}
            >
              {map(collection, item => (
                <Slide key={item.id}>
                  <ImageTest
                    srcSet={`${item.image.url}?w=2048 2048w,
                             ${item.image.url}?w=1792 1792w,
                             ${item.image.url}?w=1536 1536w,
                             ${item.image.url}?w=1280 1280w,
                             ${item.image.url}?w=1024 1024w,
                             ${item.image.url}?w=768 768w,
                             ${item.image.url}?w=512 512w`}
                    src={item.image.url}
                    sizes="80vw"
                    title={item.title}
                    alt={item.alt || item.title}
                  />
                  <StudentLink hasDetail id={item.studentId}>
                    <Caption flex>
                      <section>
                        {item.studentName && (
                          <CaptionItem bold caps>
                            {item.studentName}
                          </CaptionItem>
                        )}
                        {item.title && (
                          <CaptionItem italic>{item.title}</CaptionItem>
                        )}
                        {item.person && (
                          <CaptionItem>
                            {item.person.name && (
                              <span>{item.person.name}</span>
                            )}
                            {item.person.program && (
                              <span>, {item.person.program}</span>
                            )}
                          </CaptionItem>
                        )}
                      </section>
                      <section
                        dangerouslySetInnerHTML={{ __html: arrowIcon }}
                      />
                    </Caption>
                  </StudentLink>
                </Slide>
              ))}
            </Swiper>
            {/* <Refresh prefix="refresh-art" /> */}
          </SliderWrapper>
        </Test>
      </TestWrap>
    );
  }
}

export default SlideTest;

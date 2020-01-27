import React from 'react'
import PropTypes from 'prop-types'
import LinkEl from 'cape-mixer/lib/Link/Link'

import { Wrapper, Tagline, Underline, Description, DescriptionWrapper, EventDate } from './styles'

const Blurb = ({ description, tagline, eventDate }) => (
  <Wrapper>
    <div>
      <Tagline>
        <LinkEl routeId="studentList">
          <Underline>{tagline}</Underline>
        </LinkEl>
      </Tagline>
      <EventDate>{eventDate}</EventDate>
    </div>
    <DescriptionWrapper>
      { description.map((pText, index) =>
        // eslint-disable-next-line
        <Description key={index} dangerouslySetInnerHTML={{ __html: pText }} /> )
      }
    </DescriptionWrapper>
  </Wrapper>
)

Blurb.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  tagline: PropTypes.string,
  eventDate: PropTypes.string,
}
Blurb.defaultProps = {
  description: [
    // eslint-disable-next-line
    `<b>MICA GRAD SHOW 2020</b> showcases the culminating work of more than 150 of MICA's graduate students from the College's internationally renowned programs through ground-breaking exhibitions, presentations, public programs and student-curated installations throughout Baltimore City.`,
    // eslint-disable-next-line
    `Join us for a season of innovative and inspiring events and exhibitions featuring the next generation of creative thinkers — artists, designers, filmmakers, educators and curators — as they demonstrate the power and possibility of contemporary art and design.`,
  ],
  tagline: 'Meet the next generation of creative thinkers.',
  eventDate: 'Spring / Summer 2020',
}

export default Blurb

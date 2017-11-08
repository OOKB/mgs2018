import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Tagline, Description, DescriptionWrapper, EventDate } from './styles'

const Blurb = ({ description, tagline, eventDate }) => {
  return (
    <Wrapper>
      <div>
        <Tagline>{tagline}</Tagline>
        <EventDate>{eventDate}</EventDate>
      </div>
      <DescriptionWrapper>
        {description.map((pText, index) => <Description key={index} dangerouslySetInnerHTML={{ __html: pText }}></Description>)}
      </DescriptionWrapper>
    </Wrapper>
  )
}

Blurb.propTypes = {
  description: PropTypes.array.isRequired,
  tagline: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
}
Blurb.defaultProps = {
  description: [
    `<b>MICA GRAD SHOW 2018</b> showcases the culminating work of more than 150 of MICA's graduate students from the College's internationally renowned programs through ground-breaking exhibitions, presentations, public programs and student-curated installations throughout Baltimore City.`,
    `Join us for a season of innovative and inspiring events and exhibitions featuring the next generation of creative thinkers — artists, designers, filmmakers, educators and curators — as they demonstrate the power and possibility of contemporary art and design.`,
  ],
  tagline: 'Meet the next generation of creative thinkers.',
  eventDate: 'Coming Soon: Spring / Summer 2018',
}

export default Blurb

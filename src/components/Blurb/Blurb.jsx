import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Tagline, Description, EventDate } from './styles'

const Blurb = ({ description, tagline, eventDate }) => {
  return (
    <Wrapper>
      <div>
        <Tagline>{tagline}</Tagline>
        <EventDate>{eventDate}</EventDate>
      </div>
      <div>
        {description.map((pText, index) => <Description key={index}>{pText}</Description>)}
      </div>
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
    `We invite you to join the next generation of creative thinkers—artists, designers, filmmakers, educators, curators and critics—as they demonstrate the power and possibilities of contemporary art and design.`,
    `MICA Grad Show 2017 includes exhibitions and critiques, gallery talks and presentations, public programs, a symposium, and student-curated installations throughout Baltimore City.`,
    `Join us for a season of innovative and inspiring events and exhibitions featuring the culminating work of more than 150 of MICA's graduate students from the College's internationally renowned programs.`,
  ],
  tagline: 'Meet the next generation of creative thinkers.',
  eventDate: 'February 23 – July 27, 2018',
}

export default Blurb

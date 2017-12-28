import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import css from 'cape-style'

import HomeWrapper from '../Home/HomeWrapper'
import Search from '../Search/Search'
import ShowItem from './ShowGroup'

import { Group, GroupHeader, GroupBody, Blurb } from './styles'


function ScheduleEl({ curatorialPracticeBlurb, showGroups }) {
  const { onCampusExhibition, singleDay, cityWide } = showGroups
  const collectionId = 'ShowGroup'
  return (
    <HomeWrapper>
      <article id="schedule" style={css('pl1p5 pr1p5')}>

        <header>
          <div className="" style={css('flex')}>
            <Search collectionId={collectionId} style={css('flexAuto')} />
          </div>
        </header>

        <Group>
          <GroupHeader>Exhibitions</GroupHeader>
          <GroupBody>
            { onCampusExhibition &&
              map(onCampusExhibition, item => <ShowItem key={item.id} {...item} />)
            }
          </GroupBody>
        </Group>

        <Group>
          <GroupHeader>Events</GroupHeader>
          <GroupBody>
            { singleDay &&
              map(singleDay, item => <ShowItem key={item.id} {...item} />)
            }
          </GroupBody>
        </Group>

        <Group>
          <GroupHeader>Curatorial Practice</GroupHeader>
          <GroupBody>
            <Blurb>{curatorialPracticeBlurb}</Blurb>
            { cityWide &&
              map(cityWide, item => <ShowItem key={item.id} {...item} />)
            }
          </GroupBody>
        </Group>

      </article>
    </HomeWrapper>
  )
}
ScheduleEl.propTypes = {
  curatorialPracticeBlurb: PropTypes.string,
  showGroups: PropTypes.shape({
    onCampusExhibition: PropTypes.arrayOf(PropTypes.object),
    singleDay: PropTypes.arrayOf(PropTypes.object),
    cityWide: PropTypes.arrayOf(PropTypes.object),
  }),
}
ScheduleEl.defaultProps = {
  curatorialPracticeBlurb: 'Students in MICA’s MFA in Curatorial Practice program complete curatorial projects and collaborate with artists, communities, organizations, and venues. Each student works in a variety of contexts and formats in order to bring contemporary art and culture to new audiences. Visitor hours for individual sites vary. For additional information about partnerships, participating artists, visitor hours, and exhibition programming, visit each venue’s website or micacuratorial.org.',
  showGroups: null,
}
export default ScheduleEl

import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import css from 'cape-style'
// import './Schedule.css'
import HomeWrapper from '../Home/HomeWrapper'
import Search from '../Search/Search'
import ShowItem from './ShowGroup'

function ScheduleEl({ curatorialPracticeBlurb, showGroups }) {
  const { onCampusExhibition, singleDay, cityWide } = showGroups
  return (
    <HomeWrapper>
      <article id="schedule" style={css('pl1 pr1 pb2')}>

        <header>
          <div className="group" style={css('flex')}>
            <Search collectionId={'ShowGroup'} style={css('flexAuto')} />
          </div>
        </header>

        <section>
          <h2 style={css('m0 mt3 bt bb')}>Exhibitions</h2>
          <div style={css('flex')} className="shows item-grid">
            {onCampusExhibition &&
              map(onCampusExhibition, item => <ShowItem key={item.id} {...item} />)
            }
          </div>
        </section>

        <section>
          <h2 style={css('m0 mt3 bb')}>Events</h2>
          <div className="shows item-grid">
            {singleDay &&
              map(singleDay, item => <ShowItem key={item.id} {...item} />)
            }
          </div>
        </section>

        <section style={css('mb3')}>
          <h2 style={css('m0 mt3 bb')}>Curatorial Practice</h2>
          <div style={css('mt1 mb1 mw7 bgYellow')}>
            <p>{curatorialPracticeBlurb}</p>
          </div>
          <div className="shows item-grid">
            {cityWide &&
              map(cityWide, item => <ShowItem key={item.id} {...item} />)
            }
          </div>
        </section>

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
}
export default ScheduleEl

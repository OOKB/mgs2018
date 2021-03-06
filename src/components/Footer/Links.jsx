import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import classnames from 'classnames'
import css from 'cape-style'
import LinkEl from 'cape-mixer/lib/Link/Link'
import { ListItem, FlexList } from './styles'

function Links({ className, links, title, siteId }) {
  return (
    <section className={classnames('column', className)}>
      { title && <h3 style={css('fs1 m0')}>{title}</h3> }
      <FlexList>
        { map(links, (item, index) =>
          <ListItem key={index}><LinkEl {...item} siteId={siteId} /></ListItem>) }
      </FlexList>
    </section>
  )
}
Links.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  siteId: PropTypes.string,
  title: PropTypes.string,
}
Links.defaultProps = {
  className: null,
  siteId: null,
  title: null,
}
export default Links

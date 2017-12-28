import React from 'react'
import PropTypes from 'prop-types'
import Link from 'redux-history-component'
import css from 'cape-style'

function ArtEdit({ id, isActive, onDelete, title, image }) {
  const style = isActive ? css('ba bw0p25 bgGray') : null
  return (
    <li className="artwork" key={id} style={style}>
      <Link routeId="me" artId={id} style={css('block flex')} top>
        { image && image.url && <img src={`${image.url}?w=100`} alt={title} /> }
        <p style={css('ml1')}>{title || 'Untitled'}</p>
      </Link>
      {onDelete && (
        <button className="delete" onClick={onDelete}>
          <i className="fa fa-trash-o fa-2x" />
        </button>
      )}
    </li>
  )
}
ArtEdit.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string,
  image: PropTypes.shape({ url: PropTypes.string.isRequired }),
}
ArtEdit.defaultProps = {
  image: null,
  title: 'View',
}
export default ArtEdit

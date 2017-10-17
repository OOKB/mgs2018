import { connect } from 'react-redux'
import { structuredSelector } from 'cape-select'
import { getSizeId } from 'cape-style'
import Component from './HeaderEl'
import { getSiteName } from '../../select/site'

export const getState = structuredSelector({
  sizeId: getSizeId,
  siteName: getSiteName,
  // widthRem: getWidthRem,
  // widthPx: getWidthPx,
})
export default connect(getState)(Component)

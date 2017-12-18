import {
  filter, flow, get, keys, mapValues, pick, pickBy, sampleSize, sortBy, toArray, shuffle,
} from 'lodash/fp'
import { isEmpty, map, reduce } from 'lodash'
import { setField } from 'cape-lodash'
import { buildFullEntity, entityTypeSelector, getGraphNode } from 'redux-graph'
import { createSelector } from 'reselect'
import { getGraphSlice } from './util'
import { studentsFilled } from './student'

export const getArtItems = entityTypeSelector('CreativeWork')
export const getSplashArt = entityTypeSelector('SplashArt')
// Needed to build refs.
export const artGraph = getGraphSlice(['CreativeWork', 'ImageObject', 'MediaObject'])

export const getAgentOf = get('rangeIncludes.agent')
export const createWorksOnly = pickBy({ type: 'CreativeWork' })
export const getArtRefs = flow(getAgentOf, createWorksOnly)
export const artFill = setField('position', ({ position, sortOrder }) =>
  parseInt(position || sortOrder || 0, 10)
)

export function expandGetFullEntities(graphSlice) {
  return mapValues(flow(getGraphNode(graphSlice), flow(buildFullEntity(1, graphSlice), artFill)))
}
export function addStudentArt(graphSlice, student) {
  if (!student) return null
  return setField('art',
    flow(
      getArtRefs,
      expandGetFullEntities(graphSlice),
      sortBy(['position', 'title']),
      filter(item => item.image || item.associatedMedia)
    )
  )(student)
}
// Load art for every student in students object.
export function addStudentsArt(graphSlice, students) {
  if (isEmpty(students)) return students
  return mapValues(student => addStudentArt(graphSlice, student), students)
}
export const getSlideStudents = createSelector(
  flow(get('db.slideStudents'), keys),
  studentsFilled,
  pick
)
export const getSlideStudentsArt = createSelector(
  artGraph,
  getSlideStudents,
  addStudentsArt
)

export const slideStudentsArtOnly = students => reduce(
  students,
  (result, { art, id, name }) =>
    result.concat(map(art, item => ({ ...item, studentId: id, studentName: name }))), []
)

// Selected student
export const studentSplashArt = createSelector(
  createSelector(getSlideStudentsArt, slideStudentsArtOnly),
  sampleSize(3)
)
export const studentSlideArt = createSelector(
  createSelector(getSlideStudentsArt, slideStudentsArtOnly),
  sampleSize(12)
)
export const splashArt = flow(
  getSplashArt,
  toArray,
  shuffle
)

export const collageArt = flow(
  getSplashArt,
  sampleSize(3)
)
// export const getArtwork = createSelector(userIsAgentOf, getArtItems, getArtRefs)
// artwork: state => map(getArtwork(state), item => getFullEntity(state, item)),

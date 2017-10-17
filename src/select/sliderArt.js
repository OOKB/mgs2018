import { writeFileSync } from 'fs'
import { flow, mapValues, pick, pickBy, has } from 'lodash/fp'
import { buildFullEntity, selectGraph } from 'redux-graph'
import { replaceField, setWith } from 'cape-lodash'
import data from '../../mica2017.json'
import { getArtItems } from './art'

const buildPerson = pick(['name', 'id'])
const buildImage = pick(['url', 'id'])
const buildArtItem = flow(
  replaceField('image', buildImage),
  setWith('student', 'agent', buildPerson),
  pick(['student', 'image', 'id', 'title'])
)

function getArt(state) {
  return flow(
    getArtItems,
    mapValues(flow(buildFullEntity(1, selectGraph(state)), buildArtItem)),
    pickBy(has('image.url'))
  )(state)
}

writeFileSync('/tmp/art.json', JSON.stringify(getArt(data)))

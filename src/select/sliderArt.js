import { writeFileSync } from 'fs'
import { flow, keys, mapValues, overEvery, pick, pickBy, has } from 'lodash/fp'
import { get } from 'axios'
import { buildFullEntity, selectGraph } from 'redux-graph'
import { replaceField, setWith } from 'cape-lodash'
import data from '../../mica2017.json'
import { getArtItems } from './art'

const buildPerson = pick(['name', 'id'])
const buildImage = pick(['url', 'id', ''])
const buildArtItem = flow(
  replaceField('image', buildImage),
  setWith('student', 'agent', buildPerson),
  pick(['student', 'image', 'id', 'title'])
)

function notTestUser({ student: { id } }) {
  return id !== 'Y6dg66IQmUcHS13nvN2cGb6rVVD3' && id !== 'iB0TJ517wnM3NzkVmcIAmLvxy112'
}

function getArt(state) {
  return flow(
    getArtItems,
    mapValues(flow(buildFullEntity(1, selectGraph(state)), buildArtItem)),
    pickBy(overEvery([has('image.url'), notTestUser]))
  )(state)
}

const art = getArt(data)
const artIds = keys(art)
const maxId = artIds.length - 1
console.log('max', maxId)
function getSize(index = 0) {
  const url = art[artIds[index]].image.url
  function handleRes({ data: { PixelHeight, PixelWidth } }) {
    art[artIds[index]].image.height = PixelHeight
    art[artIds[index]].image.width = PixelWidth
    console.log(index)
    if (index === maxId) {
      return writeFileSync('/tmp/art.json', JSON.stringify(art))
    }
    return getSize(index + 1)
  }
  get(`${url}?fm=json`).then(handleRes)
}
getSize()

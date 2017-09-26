import reducer, { addRoutes } from 'location-info'

// Define our inital state object. This could be a fetch() to an API endpoint.

export const routes = {
  colors: '/colors',
  filmfest: '/details/recPkxpU5hm2lfIWC',
  details: '/details/:showId',
  home: '/',
  me: '/me(/:artId)',
  studentList: '/students',
  studentDetail: '/students/:studentId',
}
export const locInfo = reducer(undefined, addRoutes(routes))

export default {
  db: {
    cdnUrl: 'http://dl-f.imgix.net/',
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyCR07Rd2BM6p5wtbidGR-AlblMUmpx8XiU',
      authDomain: 'mgs-2018.firebaseapp.com',
      databaseURL: 'https://mgs-2018.firebaseio.com',
      projectId: 'mgs-2018',
      storageBucket: 'mgs-2018.appspot.com',
    },
    entityType: {
      CreativeWork: true,
      ImageObject: true,
      MediaObject: true,
      ShowGroup: true,
      Show: true,
      Program: true,
      Location: true,
      Person: true,
      Student: true,
    },
  },
  locInfo,
}

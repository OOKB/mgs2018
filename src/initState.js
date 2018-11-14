import reducer, { addRoutes } from "location-info";

// Define our inital state object. This could be a fetch() to an API endpoint.

export const routes = {
  filmfest: "/details/recPkxpU5hm2lfIWC",
  details: "/details/:showId",
  home: "/",
  me: "/me(/:artId)",
  studentList: "/students",
  studentDetail: "/students/:studentId",
  splash: "/splash"
};
export const locInfo = reducer(undefined, addRoutes(routes));

export default {
  db: {},
  firebase: {
    config: {
      apiKey: "AIzaSyBXnqaw3N3bCPm-mrq9H-cYzUcRT1buqpI",
      authDomain: "mgs-2018-restore.firebaseapp.com",
      databaseURL: "https://mgs-2018-restore.firebaseio.com",
      projectId: "mgs-2018-restore",
      storageBucket: "mgs-2018-restore.appspot.com",
      messagingSenderId: "662621338083"
    },
    entityType: {
      CreativeWork: true,
      ImageObject: true,
      MediaObject: true,
      ShowGroup: true,
      Show: true,
      SplashArt: true,
      Program: true,
      Location: true,
      Person: true,
      Student: true
    }
  },
  locInfo
};

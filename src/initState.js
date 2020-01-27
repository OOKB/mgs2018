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
	    apiKey: "AIzaSyAFJETZe1x0RGyMdCo1rSzNZ2iybo0tGiw",
      authDomain: "mgs-2020.firebaseapp.com",
      databaseURL: "https://mgs-2020.firebaseio.com",
      projectId: "mgs-2020",
      storageBucket: "mgs-2020.appspot.com",
      messagingSenderId: "202635837400"
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

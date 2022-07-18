// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  baseApiUrl:'http://localhost:3000/api',
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyBlerJIUkAU2Is5SRn9XRti89R6hCyASbw",
    authDomain: "portfolio-93bc2.firebaseapp.com",
    projectId: "portfolio-93bc2",
    storageBucket: "portfolio-93bc2.appspot.com",
    messagingSenderId: "539181403850",
    appId: "1:539181403850:web:beeeddbb1ad3e7dc766e33",
    measurementId: "G-LD5G5Q41T7"
  }
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

import * as functions from "firebase-functions";
import { user, UserRecord } from "firebase-functions/v1/auth";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const createGoogleUser = functions.auth.user().onCreate((user: UserRecord) => {
  console.log("USUARIO CRIADO");
});

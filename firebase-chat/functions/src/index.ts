import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {UserRecord} from "firebase-functions/v1/auth";

admin.initializeApp();

export const createGoogleUser = functions.auth.user().
    onCreate(async (user: UserRecord) => {
      const googleProvider = user.providerData
          .find((item) => item.providerId === "google.com");

      if (googleProvider) {
        await admin.firestore().collection("users").doc(user.uid).set({
          name: user.displayName,
          photoURL: user.photoURL,
        });
        console.log("Uhul deu certo");
      } else {
        console.log("não era google");
      }
    });

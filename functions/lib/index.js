"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// import * as admin from 'firebase-admin';
// admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.addAuthor2 = functions.firestore
    .document('/projects/{slug}')
    .onWrite((change, context) => {
    // const authorId = context.auth.uid
    console.log(context);
    console.log('AUTH-->', context.auth);
    return change.after.ref.update({ 'demo': 123 });
});
//# sourceMappingURL=index.js.map
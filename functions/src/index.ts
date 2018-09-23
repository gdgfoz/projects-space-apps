import * as functions from 'firebase-functions';

// import * as admin from 'firebase-admin';
// admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const addAuthor2 = functions.firestore
  .document('/projects/{slug}')
  .onWrite((change, context) => {
    // const authorId = context.auth.uid

    console.log(context);
    console.log('AUTH-->', context.auth);

    return change.after.ref.update({'demo': 123});
  });

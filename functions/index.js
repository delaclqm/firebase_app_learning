const functions = require('firebase-functions');

exports.createUserRecordOnFirstSignIn = functions.auth.user().onCreate((user) => {
  // Create Object of Document to Create  
  const userToAdd = {
    useruid: user.uid,
    email: user.email,
    displayName: user.displayName,
    pictureUrl: user.photoURL,
    lastSeen: new Date()
  }

  // write new doc to collection
  return admin.firestore().collection('users').add(userToAdd); 
});

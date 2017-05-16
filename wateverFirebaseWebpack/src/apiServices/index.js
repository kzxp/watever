export default {
  auth: (email, password) => {
    return global.firebaseApp.auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => result )
      .catch((error) => error )
  },
  fetchRef: (ref) => {
    return global.firebaseApp.database()
      .ref(ref).once("value")
      .then((snapshot) => snapshot.val())
  }
} 



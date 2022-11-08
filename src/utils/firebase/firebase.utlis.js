import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

//this isnt a security risk
const firebaseConfig = {
  apiKey: 'AIzaSyCtevIVJxy1o_IJ6-tPZNsiEXVTe9SyzTM',
  authDomain: 'joey-personal-portfolio.firebaseapp.com',
  projectId: 'joey-personal-portfolio',
  storageBucket: 'joey-personal-portfolio.appspot.com',
  messagingSenderId: '431957992144',
  appId: '1:431957992144:web:7da88243391f48dbd1f4d5',
}

const firebaseApp = initializeApp(firebaseConfig)
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

//google auth
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

//firestore
export const db = getFirestore()

export const createUserFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (err) {
      console.log('error', err.message)
    }
  }

  //if user 'already' exist just return
  return userDocRef
}

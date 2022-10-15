import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWim5uN7CoDXtSZWhe9alV5uTq0GGSeLA",
    authDomain: "hackharvard2022.firebaseapp.com",
    projectId: "hackharvard2022",
    storageBucket: "hackharvard2022.appspot.com",
    messagingSenderId: "781191323173",
    appId: "1:781191323173:web:bfad6ca77928a0ffa529cc",
    measurementId: "G-9X5116P1VY"
};

//initialize firebase app
initializeApp(firebaseConfig)

//initialize services
const db = getFirestore()
const auth = getAuth()

//collection ref
const colref = collection(db, 'user')

//get collection data
getDocs(colref)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })

//sign up users
// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user)
      signupForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})

// logging in and out
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('user signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})
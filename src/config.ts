import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyCRBf9ZcM4UoXif9g4gmvh90LVqKIMFH7I",
    authDomain: "memoapp-13540.firebaseapp.com",
    projectId: "memoapp-13540",
    storageBucket: "memoapp-13540.firebasestorage.app",
    messagingSenderId: "516533111531",
    appId: "1:516533111531:web:d6f960672a172fbad30cae"
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }

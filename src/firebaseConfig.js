import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCcgY-JEY7irpPObyIxKWqTW4mPhuFElTQ",
    authDomain: "react-firebase-auth-db102.firebaseapp.com",
    projectId: "react-firebase-auth-db102",
    storageBucket: "react-firebase-auth-db102.appspot.com",
    messagingSenderId: "217693091531",
    appId: "1:217693091531:web:4c657c1c057e7d541bcd4e",
    measurementId: "G-WPYRBWDMH7"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DB_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESS_ID",
    appId: "APP_ID",
    measurementId: "MEASURE_ID"
}

firebase.initializeApp (firebaseConfig)

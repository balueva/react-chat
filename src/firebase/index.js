// Import the functions you need from the SDKs you need
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAofDCL0DMkrdBKnT4txBxQGrwpViPpdZo',
    authDomain: 'react-chat-3f83f.firebaseapp.com',
    databaseURL: 'https://react-chat-3f83f-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'react-chat-3f83f',
    storageBucket: 'react-chat-3f83f.appspot.com',
    messagingSenderId: '145538000155',
    appId: '1:145538000155:web:ed3f24998270ee168c5fbe'
};

// Initialize Firebase
//const app = 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

//export const rootRef = db.ref('root');
export const chatsRef = db.ref('chats');
export const messagesRef = db.ref('messages');

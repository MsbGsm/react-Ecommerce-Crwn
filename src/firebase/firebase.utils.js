import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAfiP64SPOMLmmgvt3yHQKq_Bgx-Nymess",
  authDomain: "msb-react-crwn.firebaseapp.com",
  databaseURL: "https://msb-react-crwn.firebaseio.com",
  projectId: "msb-react-crwn",
  storageBucket: "msb-react-crwn.appspot.com",
  messagingSenderId: "383692622596",
  appId: "1:383692622596:web:ec6f72d1e81856984c5e51",
  measurementId: "G-HHM7SDWSFZ"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
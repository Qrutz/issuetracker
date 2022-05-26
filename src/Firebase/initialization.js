import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
// import {getFirestore, collection, addDoc, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWz7Q_dv2fFJFl77JTmARJKyoWi50WiHk",
    authDomain: "issuetracker-c0b7a.firebaseapp.com",
    projectId: "issuetracker-c0b7a",
    storageBucket: "issuetracker-c0b7a.appspot.com",
    messagingSenderId: "1080097493273",
    appId: "1:1080097493273:web:76f7b41c10bb16caddb588"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export async function createUser(auth, email, password) {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const SignIn = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  }



export async function SignOut() {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("error signing out!: ", error);
    }
}
export const ZonAuthStateChanged = (auth, callback) => {
    onAuthStateChanged(auth, callback);
}








// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);


// export const setUser = async () => {
//     const userRef = collection(db, "users");

// await setDoc(doc(userRef, "Admin"), {
//     name: "Admin", email: "test@hotmail.com", password: "password",
//     role: "admin",
//     });
// }





// export const getUser = async () => {
// const docRef = doc(db, "users", "Admin");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
// }



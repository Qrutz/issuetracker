import {initializeApp} from 'firebase/app';
import {getAuth, updateProfile, updateEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';


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

export const updateProfilee = (user, data) => {
    return updateProfile(user, data);
}
export const updatemail = (user, email) => {
    return updateEmail(user, email);
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






let date = new Date();
let miliseconds = date.getTime();



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// export const createTicket = async () => {
//     const ticketRef = collection(db, "Tickets");

// await setDoc(doc(ticketRef, "Ticket1"), {
//     ticketID: miliseconds, ticketTitle: "Service rendering error", description: "need to do some shit idk what",
//     Urgency: "Medium", Status: "Open", AssignedTo: "Henric", CreatedBy: "Joen", CreatedOn: new Date(),
//     });
// }




export function createTicket(title, descrition, urgency, status) {
    const ticketRef = collection(db, "Tickets");
    addDoc(ticketRef, {
        ticketID: miliseconds, ticketTitle: title, description: descrition,
        Urgency: urgency, Status: status, AssignedTo: null, CreatedBy: null, CreatedOn: new Date(),
    });
}

export const deleteTicket  = async (id) => {
    const ticketRef = collection(db, "Tickets");
    const tickets = await getDocs(ticketRef);
    const ticket = tickets.docs.map(doc => doc.data().ticketID);
    const index = ticket.indexOf(id);
    deleteDoc(tickets.docs[index].ref);

    console.log("deleted ticket: ", id);
 
}

    
       


export const getTickets = async () => {
    const ticketRef = collection(db, "Tickets");
    const tickets = await getDocs(ticketRef);
    const out = tickets.docs.map(doc => doc.data());
    return out;
}






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



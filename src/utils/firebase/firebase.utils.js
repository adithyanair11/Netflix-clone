import { initializeApp } from "firebase/app";
import {getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,createUserWithEmailAndPassword} from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBBt5q6E-PA-nE0SYEBXak75d3bXbbYCZE",
    authDomain: "netflix-clone-963b9.firebaseapp.com",
    projectId: "netflix-clone-963b9",
    storageBucket: "netflix-clone-963b9.appspot.com",
    messagingSenderId: "678801760366",
    appId: "1:678801760366:web:25e0d343ba34273bfec67f"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth,additionalInfo) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    if(!userSnapShot.exists()){
        const {userName,email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                userName,
                email,
                createdAt,
                ...additionalInfo
            })
        }catch(err){
            console.log(err);
        }
    }
    return userDocRef;
  }



export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password)
}


export const signOutUser = async() => await signOut(auth);


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);
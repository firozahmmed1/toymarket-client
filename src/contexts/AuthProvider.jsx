/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [loading, setLoading]=useState(true);
     const [user, setUser] =useState(null);
    const signUpUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
       const unsuscribe= onAuthStateChanged(auth, currentUser=>{
            setLoading(true)
            setUser(currentUser)
         })
         return ()=>{
            unsuscribe();
         }
    },[]);
    const authInfo ={
        user,
        loading,
        signUpUser,
        logInUser,
        googleSignIn,
        logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
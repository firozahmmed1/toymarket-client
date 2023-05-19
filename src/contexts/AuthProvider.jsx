/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [loading, setLoading]=useState(true);

    const signUpUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const user ={name:'Login Page'}
    const authInfo ={
        user,
        loading,
        signUpUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
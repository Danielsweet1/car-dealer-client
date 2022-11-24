import React, { useState } from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)
        //google login
    const googleProvider = new GoogleAuthProvider()

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //create user with email and password
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        googleLogin,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
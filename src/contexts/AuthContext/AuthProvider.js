import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
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

    // signin user with email and password
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update profile
    const updateUser = (name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name
        })
    }

    //signout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, createUser=>{
            setUser(createUser)
            setLoading(false)
        })
        return ()=>unSubscribe()
    },[])
    const authInfo = {
        googleLogin,
        createUser,
        loading,
        logIn,
        user,
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
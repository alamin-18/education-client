import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({ children }) => {
    //user state
    const [user, setUser] = useState({})
    const [lodding,setLodding] = useState(true)

    //create user
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (name, photoUrl) => {
        return updateProfile(name, photoUrl)
    }
    const googleSingin = (provider) => {
        setLodding(true)
        return signInWithPopup(auth, provider)
    }
    const gitHubSingin = (provider) => {
        setLodding(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLodding(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLodding(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const AuthInfo = { user,lodding, register, logIn, profileUpdate, googleSingin, gitHubSingin, logOut }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
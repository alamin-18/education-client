import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup } from "firebase/auth";
import { app } from '../../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({children}) => {
    //user state
    const [user,setUser] = useState({})

    //create user
    const register = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const profileUpdate = (name,photoUrl)=>{
        return updateProfile(name,photoUrl)
    }
    const googleSingin = (provider) =>{
        return signInWithPopup(auth,provider)
    }
    const gitHubSingin = (provider) =>{
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const AuthInfo ={user,register,logIn,profileUpdate,googleSingin,gitHubSingin}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
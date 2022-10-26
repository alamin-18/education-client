import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({children}) => {
    //user state
    const [user,setUser] = useState({name:"alamin",age:42})

    //create user
    const register = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const AuthInfo ={user,register}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
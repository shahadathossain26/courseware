import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
            console.log('user inside state chage', currentuser);
            setUser(currentuser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authinfo ={user,createUser, providerLogin, logOut, singIn}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
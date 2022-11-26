import React, { createContext, useState,useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile,onAuthStateChanged,signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from '../firebase.config';


const Context=createContext();

const AuthContext = ({children}) => {
    const [user,setUser]=useState({});
    const [loading,setLoading] = useState(true);
    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();

    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    const google=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const setName=(name)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
          });
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth).then();
    }

    useEffect(()=>{
        onAuthStateChanged(auth,userInfo=>{
            setUser(userInfo);
            setLoading(false);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const value={user,setUser,register,login,setName,logOut,loading,google};

    return <Context.Provider value={value}>{children}</Context.Provider>
};

export {AuthContext,Context};
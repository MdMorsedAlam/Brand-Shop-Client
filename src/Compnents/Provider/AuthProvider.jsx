import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

export const MyContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] = useState(true);


    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleProvider = new GoogleAuthProvider();

    const GoogleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }





    const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        })
        return unSubscribe;
      }, []);
    const contextInfo={user,loading,createUser,loginUser,GoogleLogin,logOut}
    return (
        <MyContext.Provider value={contextInfo}>
            {
                children
            }
        </MyContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;
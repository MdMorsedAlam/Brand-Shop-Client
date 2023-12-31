import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    const FacebookProvider = new FacebookAuthProvider();

    const facebookLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,FacebookProvider)
    }

    const GithubProvider = new GithubAuthProvider();

    const githubLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,GithubProvider)
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
    const contextInfo={user,loading,createUser,loginUser,googleLogin,facebookLogin,githubLogin,logOut}
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
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            // console.log('current user', currentUser);

            // if user exists then issue a token
            if (currentUser) {
                axios.post('https://b9a11-server-side-anik98-bh.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        // console.log('token response', res.data);
                        setUser(currentUser)
                        setLoading(false);
                    })
            }
            else {
                axios.post('https://b9a11-server-side-anik98-bh.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                         console.log(res.data);
                        setUser(null)
                        setLoading(false);
                    })
            }
        })


        return () => {
            unSubscribe();
        }
    }, [user?.email])

    const authInfo = {
        user,
        createUser,
        loading,
        setLoading,
        logOut,
        signIn,
        googleLogin,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
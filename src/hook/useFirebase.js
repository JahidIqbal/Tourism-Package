import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import { useEffect, useState } from "react";
import firebaseAppInit from "../Firebase/Firebase.init";
firebaseAppInit();


const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)

    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)



            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return {
        signInWithGoogle,
        setUser,
        setError,
        user,
        error,
        handleLogout,
    };
};

export default useFirebase;

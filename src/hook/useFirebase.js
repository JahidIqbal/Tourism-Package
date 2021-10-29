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

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);

                setError("");
            })
            .catch((error) => setError(error.message));
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
        handleGoogleLogin,
        user,
        error,
        handleLogout,
    };
};

export default useFirebase;

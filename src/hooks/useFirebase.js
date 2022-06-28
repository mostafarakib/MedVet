import { useEffect, useState } from "react";
import initAuth from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

initAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const interval = setInterval(() => {
      setError(error ? error : "");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const userRegistrationHandler = () => {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword);
  };

  const emailLoginHandler = () => {
    return signInWithEmailAndPassword(auth, userEmail, userPassword);
  };

  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  const resetPassword = () => {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  const googleSignInHandler = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    error,
    setError,
    googleSignInHandler,
    nameChangeHandler,
    emailChangeHandler,
    passwordChangeHandler,
    userRegistrationHandler,
    emailLoginHandler,
    logOut,
    updateUserProfile,
    resetPassword,
  };
};

export default useFirebase;

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    // Get the current user
    const user = auth.currentUser;
    const userDocRef = doc(collection(firestore, "users_data"), user?.uid);

    // If the user is anonymous, delete the anonymous account
    if (user?.isAnonymous) {
      await user.delete();
      await deleteDoc(userDocRef);
    }

    // Sign in with email and password
    await signInWithEmailAndPassword(auth, email, password);

    // At this point, the user is signed in with their email and password
  } catch (error) {
    // Handle errors
    console.error("Error logging in:", error);
    throw error; // Rethrow the error to handle it further up the call stack
  }
};

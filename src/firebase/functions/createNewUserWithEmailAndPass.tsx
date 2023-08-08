import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const createNewUserWithEmailAndPass = async (
    email: string,
    password: string
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("UserId", userCredential.user.uid);
      return userCredential.user;
    } catch (error) {
      console.log(error, "Sign Up Failed");
    }
  };

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
      return userCredential.user;
    } catch (error) {
      console.log(error, "Sign Up Failed");
    }
  };

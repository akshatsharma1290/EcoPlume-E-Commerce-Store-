import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { deleteAnonymousAccount } from "../functions/deleteAnonymous";

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const anonymousCred = auth.currentUser;
    await signInWithEmailAndPassword(auth, email, password);
    anonymousCred &&
      deleteAnonymousAccount({ anonymousUser: anonymousCred }).catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error, "Log In Failed");
  }
};

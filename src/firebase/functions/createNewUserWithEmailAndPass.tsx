import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { deleteAnonymousAccount } from "../functions/deleteAnonymous";

export const createNewUserWithEmailAndPass = async (
  email: string,
  password: string
) => {
  try {
    const anonymousCred = auth.currentUser;
    await createUserWithEmailAndPassword(auth, email, password);
    anonymousCred &&
      deleteAnonymousAccount({ anonymousUser: anonymousCred }).catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error, "Sign Up Failed");
  }
};

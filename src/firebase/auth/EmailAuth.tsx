import { deleteAnonymousAccount } from "../functions/deleteAnonymous";
import { createNewUserWithEmailAndPass } from "../functions/createNewUserWithEmailAndPass";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  await deleteAnonymousAccount();
  await createNewUserWithEmailAndPass(email, password);
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  await deleteAnonymousAccount();
  await signInWithEmailAndPassword(auth, email, password);
};

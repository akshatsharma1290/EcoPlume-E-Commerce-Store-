import { createNewUserWithEmailAndPass } from "../functions/createNewUserWithEmailAndPass";
import { logInWithEmailAndPassword } from "../functions/logInWithEmailAndPass";

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  await createNewUserWithEmailAndPass(email, password);
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  await logInWithEmailAndPassword(email, password);
};

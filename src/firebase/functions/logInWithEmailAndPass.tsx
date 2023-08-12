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

    if (anonymousCred && anonymousCred.isAnonymous) {
      await deleteAnonymousAccount({ anonymousUser: anonymousCred });
    }
  } catch (error) {
    console.error("Log In Failed:", error);
  }
};

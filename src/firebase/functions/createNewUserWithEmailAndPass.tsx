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

    if (anonymousCred && anonymousCred.isAnonymous) {
      await deleteAnonymousAccount({ anonymousUser: anonymousCred });
      console.log("Logged in successfully and anonymous account deleted.");
    }

  } catch (error) {
    console.error(error, "Sign Up Failed");
  }
};

import { EmailAuthProvider, linkWithCredential } from "firebase/auth";
import { auth } from "../firebase";
import { logInWithEmailAndPassword } from "./logInWithEmailAndPass";

export const createNewUserWithEmailAndPass = async (
  email: string,
  password: string
) => {
  const anonymousCred = auth.currentUser;
  const credential = EmailAuthProvider.credential(email, password);

  if (anonymousCred) {
    try {
      const userCredential = await linkWithCredential(
        anonymousCred,
        credential
      );
      const newUser = userCredential.user; // Extracting the user from AuthResult
      console.log(newUser);

      await logInWithEmailAndPassword(email, password);
      console.log("Logged in successfully");
    } catch (err) {
      console.log("Failed to link or log in:", err);
    }
  }
};

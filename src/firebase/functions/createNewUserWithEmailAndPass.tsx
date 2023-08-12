import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { deleteAnonymousAccount } from "../functions/deleteAnonymous";

export const createNewUserWithEmailAndPass = async (
  email: string,
  password: string
) => {
  const anonymousCred = auth.currentUser;
  await createUserWithEmailAndPassword(auth, email, password);

  if (anonymousCred && anonymousCred.isAnonymous) {
    await deleteAnonymousAccount({ anonymousUser: anonymousCred });
  }
};

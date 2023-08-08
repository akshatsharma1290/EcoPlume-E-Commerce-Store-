import { deleteAnonymousAccount } from "../functions/deleteAnonymous";
import { createNewUserWithEmailAndPass } from "../functions/createNewUserWithEmailAndPass";

export const signUpWithEmailAndPassword = async (email : string , password : string) => {
  await deleteAnonymousAccount();
  createNewUserWithEmailAndPass(email, password)
    .then((user) => {
      console.log(user);
      sessionStorage.clear()
    })
    .catch((err) => {
      console.log(err);
    });
};

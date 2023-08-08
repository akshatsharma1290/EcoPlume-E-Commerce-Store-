import { deleteAnonymousAccount } from "../functions/deleteAnonymous";
import { createNewUserWithEmailAndPass } from "../functions/createNewUserWithEmailAndPass";
import { ShiftDataInNewAccount } from "../functions/ShiftData";
import { CartItemsType } from "../../store/slices/cartItemsSlice";

export const signUpWithEmailAndPassword = async (email : string , password : string , cartItems : CartItemsType[]) => {
  await deleteAnonymousAccount();
  createNewUserWithEmailAndPass(email, password)
    .then((user) => {
      console.log(user);
      ShiftDataInNewAccount(cartItems);
    })
    .catch((err) => {
      console.log(err);
    });
};

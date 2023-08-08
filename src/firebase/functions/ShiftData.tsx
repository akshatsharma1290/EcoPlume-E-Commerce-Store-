import { auth } from "../firebase";
import { CartItemsType } from "../../store/slices/cartItemsSlice";
import { storeData } from "./DataInterchange";

export const ShiftDataInNewAccount = (cartItems: CartItemsType[]) => {
    const uid = auth.currentUser?.uid;
    uid &&
      storeData(uid, { cartItems }).catch((err) => {
        console.log(err, "Data Shift Failed.");
      });
  };
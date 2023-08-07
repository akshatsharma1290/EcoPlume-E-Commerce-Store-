import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { CartItemsType } from "../../store/slices/cartItemsSlice";
import { storeData } from "../functions/DataInterchange";
import { deleteDoc, doc } from "firebase/firestore";

export const ShiftDataInNewAccount = (cartItems: CartItemsType[]) => {
  const uid = auth.currentUser?.uid;
  uid && storeData(uid, { cartItems })
    .then(() => {
      console.log("Shifted Data");
    })
    .catch((err) => {
      console.log(err, "Data failed to shift");
    });
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem("UserId", userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnonymousAccount = () => {
  const anonymousUser = auth.currentUser;
  console.log(anonymousUser?.uid);

  if (anonymousUser && anonymousUser.isAnonymous) {
    deleteUser(anonymousUser)
      .then(() => {
        console.log(
          "Anonymous account deleted successfully",
          anonymousUser.uid
        );
        const oldDocRef = doc(firestore, "users_data", anonymousUser.uid);
        deleteDoc(oldDocRef)
          .then(() => {
            console.log("Old Doc Delelted");
          })
          .catch((err) => {
            console.log("Not delted", err);
          });
        localStorage.setItem("UserId", "");
        localStorage.setItem("UserCred", "");
      })
      .catch((error) => {
        console.log("Error deleting anonymous account:", error);
      });
  } else {
    console.log(
      "Cannot delete account. User is not anonymous or not signed in."
    );
  }
};

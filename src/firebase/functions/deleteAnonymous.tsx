import { firestore } from "../firebase";
import { User, deleteUser } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";

type Anonymous = {
  anonymousUser: User;
};

export const deleteAnonymousAccount = async ({ anonymousUser }: Anonymous) => {
  if (anonymousUser && anonymousUser.isAnonymous) {
    try {
      const oldDocRef = doc(firestore, "users_data", anonymousUser.uid);
      await deleteDoc(oldDocRef); // Wait for Firestore document deletion

      await deleteUser(anonymousUser); // Delete the user account

      console.log("Anonymous account deleted successfully.");
    } catch (error) {
      console.log("Error deleting anonymous account:", error);
    }
  } else {
    console.log(
      "Cannot delete account. User is not anonymous or not signed in."
    );
  }
};

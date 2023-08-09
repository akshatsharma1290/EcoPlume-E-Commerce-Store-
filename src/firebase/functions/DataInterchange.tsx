import { firestore } from "../firebase";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { CartItemsType } from "../../store/slices/cartItemsSlice";

type UserData = {
  cartItems: CartItemsType[];
};

export const storeData = async (userId: string, data: UserData) => {
  try {
    const userDocRef = doc(collection(firestore, "users_data"), userId);

    await setDoc(userDocRef, data);
  } catch (error) {
    console.log("Error storting data", error);
  }
};

export const retrieveData = async (userId: string) => {
  if (!userId) {
    console.log("Error: User ID is empty.");
    return;
  }
  try {
    // Get the reference to the document in the collection using the anonymous user ID
    const userDocRef = doc(collection(firestore, "users_data"), userId);

    // Fetch the document data
    const docSnapshot = await getDoc(userDocRef);

    if (docSnapshot.exists()) {
      // Document exists, so you can access the data
      const userData = docSnapshot.data();
      return userData;
    } else {
      // Document doesn't exist
      console.log("Document not found.");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

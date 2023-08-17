import { collection, doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase";

export const subscribeToNewsletter = async (
  name: string,
  email: string,
  review: string
) => {
  try {
    const uid = auth.currentUser?.uid;
    const docRef = doc(collection(firestore, "subscribed_users"), uid);
    const data = { name, email, review };

    await setDoc(docRef, data);
  } catch (error) {
    console.error(error, "Failed Subscribing");
  }
};

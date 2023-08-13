import { collection, doc, setDoc } from "firebase/firestore"
import { firestore } from "../firebase"

export const subscribeToNewsletter = async  (name : string , email : string , review : string) => {
    try {
        const docRef = doc(collection(firestore , "subscribed_users") , name)
        const data = {name , email , review}

        await setDoc(docRef , data)
    } catch (error) {
        console.error(error , "Failed Subscribing")
    }
}
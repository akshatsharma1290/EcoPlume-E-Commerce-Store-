import { firestore } from "../firebase";
import { collection, doc, setDoc , getDoc} from "firebase/firestore";


export const storeData = async (userId : string , data : any) => {
    try {
       const userDocRef = doc(collection(firestore , "anonymous_users_data") , userId)

       await setDoc(userDocRef , data)
    } catch (error) {
    console.log("Error storting data");

    }
   }

   export const retrieveData = async (userId : string)=>{
     try {
       // Get the reference to the document in the collection using the anonymous user ID
       const userDocRef = doc(collection(firestore, 'anonymous_users_data'), userId);

       // Fetch the document data
       const docSnapshot = await getDoc(userDocRef);

       if (docSnapshot.exists()) {
         // Document exists, so you can access the data
         const userData = docSnapshot.data();
         console.log('Retrieved data:', userData);
         return userData;
       } else {
         // Document doesn't exist
         console.log('Document not found.');
         return null;
       }
     } catch (error) {
       console.error('Error retrieving data:', error);
       return null;
     }
   }
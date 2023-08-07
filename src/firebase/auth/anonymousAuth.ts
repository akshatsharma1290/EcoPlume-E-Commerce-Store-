import { signInAnonymously } from 'firebase/auth';
import { auth } from '../firebase';

export const signInAnonymous = () => {
    signInAnonymously(auth)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // Store the user ID in local storage
        localStorage.setItem("UserCred" , JSON.stringify(user))
        localStorage.setItem('UserId', user.uid);
      })
      .catch((error) => {
        console.error('Anonymous sign-in failed:', error);
      });
  };

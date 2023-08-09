import { signInAnonymously } from 'firebase/auth';
import { auth } from '../firebase';

export const signInAnonymous = () => {
    signInAnonymously(auth)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user , "Signing Up anonymously");
      })
      .catch((error) => {
        console.error('Anonymous sign-in failed:', error);
      });
  };

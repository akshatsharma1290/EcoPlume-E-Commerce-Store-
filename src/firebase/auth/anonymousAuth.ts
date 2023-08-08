import { signInAnonymously } from 'firebase/auth';
import { auth } from '../firebase';

export const signInAnonymous = () => {
    signInAnonymously(auth)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.error('Anonymous sign-in failed:', error);
      });
  };

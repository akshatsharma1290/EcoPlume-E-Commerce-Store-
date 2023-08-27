import { signInAnonymously } from 'firebase/auth';
import { auth } from '../firebase';

export const signInAnonymous = () => {
    signInAnonymously(auth)
      .then(() => {
        console.log("Signing Up anonymously");
      })
      .catch((error) => {
        console.error('Anonymous sign-in failed:', error);
      });
  };

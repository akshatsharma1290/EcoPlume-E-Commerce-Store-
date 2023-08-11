import { signInAnonymous } from "../../firebase/auth/anonymousAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const UserDetails = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out");
        signInAnonymous();
      })
      .catch((err) => {
        console.log(err, "Not signed out.");
      });
  };
  return (
    <section className="flex flex-col text-center px-5">
      <p className="text-lg">
        You Are Currently Logged In As{" "}
        <span className="underline">{auth.currentUser?.email}</span>.
      </p>
      <button
        onClick={handleSignOut}
        className="mt-4 tracking-wide text-xl font-medium bg-black text-white border-black border cursor-pointer px-6 py-2 dark:border-white dark:bg-white dark:text-black"
      >
        SignOut
      </button>
    </section>
  );
};

export default UserDetails;

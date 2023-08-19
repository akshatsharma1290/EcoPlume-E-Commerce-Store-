import { signInAnonymous } from "../../firebase/auth/anonymousAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAppDispatch } from "../../store/hooks";
import { setLoading } from "../../store/slices/loadingSlice";

const UserDetails = () => {
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(setLoading(true));
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
      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className=" mt-4 tracking-wide text-xl rounded-md font-medium uppercase w-1/2 hover:bg-slate-800 transition-all bg-black text-white border-black border cursor-pointer px-6 py-2 dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-300"
        >
          Sign Out
        </button>
      </div>
    </section>
  );
};

export default UserDetails;

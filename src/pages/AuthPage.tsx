import { useState } from "react";
import AuthForm from "../components/AuthComponents/AuthForm";
import Loader from "../components/Reusables/Loader";
import { useAppSelector } from "../store/hooks";
import { loadingSelector } from "../store/slices/loadingSlice";
import { auth } from "../firebase/firebase";
import UserDetails from "../components/AuthComponents/UserDetails";

const AuthPage = () => {
  const isLoading = useAppSelector(loadingSelector);
  const [authMode, setAuthMode] = useState("Sign Up");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="mt-20 mb-10 font-outfit text-black flex flex-col justify-center dark:text-white">
            <AuthForm authMode={authMode} />
            {auth.currentUser && !auth.currentUser?.isAnonymous ? (
              <UserDetails />
            ) : (
              <>
                <p className="text-center text-xl uppercase my-1">Or</p>
                <a
                  className="text-center text-xl text-blue-700 underline dark:text-blue-400 cursor-pointer"
                  onClick={() => {
                    {
                      authMode === "Sign Up"
                        ? setAuthMode("Log In")
                        : setAuthMode("Sign Up");
                    }
                  }}
                >
                  {authMode === "Sign Up" ? "Log In" : "Sign Up"}
                </a>
              </>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default AuthPage;

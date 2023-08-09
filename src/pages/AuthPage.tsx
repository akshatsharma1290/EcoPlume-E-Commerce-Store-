import { useState, useEffect } from "react";
import AuthForm from "../components/AuthComponents/AuthForm";
import Loader from "../components/Reusables/Loader";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadingSelector, setLoading } from "../store/slices/loadingSlice";
import { auth } from "../firebase/firebase";
import UserDetails from "../components/AuthComponents/UserDetails";
import { onAuthStateChanged } from "firebase/auth";

const AuthPage = () => {
  const isLoading = useAppSelector(loadingSelector);
  const [authMode, setAuthMode] = useState("Sign Up");
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      !user ? dispatch(setLoading(true)) : null;
    });
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="mt-24 font-outfit flex flex-col justify-center">
            <AuthForm authMode={authMode} />
            {!auth.currentUser?.isAnonymous ? (
              <UserDetails />
            ) : (
              <>
                <p className="text-center text-xl uppercase my-1">Or</p>
                <a
                  className="text-center text-xl text-blue-700 underline "
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

import { useState } from "react";
import AuthForm from "../components/AuthComponents/AuthForm";
import Loader from "../components/Reusables/Loader";
import { useAppSelector } from "../store/hooks";
import { loadingSelector } from "../store/slices/loadingSlice";

const AuthPage = () => {
  const isLoading = useAppSelector(loadingSelector);
  const [authMode, setAuthMode] = useState("Sign Up");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="mt-24 font-outfit flex flex-col justify-center">
            <AuthForm authMode={authMode} />
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
          </section>
        </>
      )}
    </>
  );
};

export default AuthPage;

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { signUpWithEmailAndPassword } from "../../firebase/auth/EmailAuth";
import { signInAnonymous } from "../../firebase/auth/anonymousAuth";
import Loader from "../Reusables/Loader";

export type AuthInput = {
  email: string;
  password: string;
};

type AuthenticationForm = {
  authMode : string
}

const AuthForm = ({authMode} : AuthenticationForm) => {
  const [accountProcessing, setAccountProcessing] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setAccountProcessing(false) : setAccountProcessing(true);
    });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthInput>();

  const onSubmit = (data: AuthInput) => {
    const { email, password } = data;
   authMode === "Sign In" ?  signUpWithEmailAndPassword(email, password)
      .then(() => {
        reset();
      })
      .catch((err) => {
        console.log(err, "Sign Up Failed.");
      }) : null;
  };

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
    <>
    {accountProcessing ? <Loader/> : null}
      {auth.currentUser?.isAnonymous ? (
        <section className="flex flex-col w-full items-center">
          <h1 className="font-bold text-2xl">{authMode}</h1>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-[90vw] gap-3 mt-3">
              <label className="font-medium" htmlFor="Email">
                Email :{" "}
              </label>
              <input
                className="w-full h-12 px-3 bg-slate-200 text-slate-800 outline-none text-lg rounded-md"
                type="email"
                placeholder="Enter Email Address"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col w-[90vw] gap-3 mt-3">
              <label className="font-medium" htmlFor="Password">
                Password :{" "}
              </label>
              <input
                className="w-full h-12 px-3 bg-slate-200 text-slate-800 outline-none text-lg rounded-md"
                type="password"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 tracking-wide text-xl font-medium bg-black text-white border-black border cursor-pointer px-6 py-2"
              >
                {authMode}
              </button>
            </div>
          </form>
          <div className="err px-9 mt-1 flex flex-col items-center text-lg">
            {errors.email?.type === "required" && (
              <span className="text-red-500">Email is required.</span>
            )}
            {errors.password?.type === "required" && (
              <span className="text-red-500">Password is required.</span>
            )}
          </div>
        </section>
      ) : (
        <>
          <section className="flex flex-col text-center px-5">
            <p className="text-lg">
              You Are Currently Logged In As{" "}
              <span className="underline">{auth.currentUser?.email}</span>.
            </p>
            <button
              onClick={handleSignOut}
              className="mt-4 tracking-wide text-xl font-medium bg-black text-white border-black border cursor-pointer px-6 py-2"
            >
              SignOut
            </button>
          </section>
        </>
      )}
    </>
  );
};

export default AuthForm;

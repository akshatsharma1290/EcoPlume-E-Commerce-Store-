import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase/firebase";
import {
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
} from "../../firebase/auth/EmailAuth";
import { useAppDispatch } from "../../store/hooks";
import { setLoading } from "../../store/slices/loadingSlice";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

export type AuthInput = {
  email: string;
  password: string;
};

type AuthenticationForm = {
  authMode: string;
};

const AuthForm = ({ authMode }: AuthenticationForm) => {
  const dispatch = useAppDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthInput>();

  const onSubmit = async (data: AuthInput) => {
    const { email, password } = data;
    dispatch(setLoading(true));
    try {
      if (authMode === "Sign Up") {
        await signUpWithEmailAndPassword(email, password);
      } else {
        await signInWithEmailAndPassword(email, password);
      }

      reset();
    } catch (error) {
      console.error("Authentication Failed.", error);
      dispatch(setLoading(false));
      setTimeout(() => {
        alert("Authentication Failed.");
      }, 300);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((visibility) => !visibility);
  };

  return (
    <>
      {auth.currentUser?.isAnonymous ? (
        <section className="flex flex-col w-full items-center">
          <h1 className="font-bold text-2xl">{authMode}</h1>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-[90vw] gap-3 mt-3">
              <label className="font-medium" htmlFor="email">
                Email :{" "}
                <input
                  className="mt-3 w-full h-12 px-3 bg-slate-200 text-slate-800 outline-none text-lg rounded-md"
                  type="email"
                  placeholder="Enter Email Address"
                  {...register("email", { required: true })}
                />
              </label>
            </div>
            <div className="flex flex-col w-[90vw] gap-3 mt-3 relative">
              <label className="font-medium" htmlFor="password">
                Password :{" "}
                <input
                  className="mt-3 w-full h-12 px-3 bg-slate-200 text-slate-800 outline-none text-lg rounded-md pr-14"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter Password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                <span
                  className="toggleVisibility absolute top-12 right-4 text-2xl cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <BsFillEyeFill />
                  ) : (
                    <BsFillEyeSlashFill />
                  )}
                </span>
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-3/5 rounded-md  mt-4 tracking-wide text-xl font-medium bg-black text-white border-black border cursor-pointer px-6 py-2 dark:border-white dark:bg-white dark:text-black"
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
            {errors.password?.type === "minLength" && (
              <span className="text-red-500">
                Password must be 6 characters long.
              </span>
            )}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default AuthForm;

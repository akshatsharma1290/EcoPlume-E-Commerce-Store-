import { useForm } from "react-hook-form";
import { auth } from "../../firebase/firebase";
import {
  logInWithEmailAndPassword,
  signUpWithEmailAndPassword,
} from "../../firebase/auth/EmailAuth";

export type AuthInput = {
  email: string;
  password: string;
};

type AuthenticationForm = {
  authMode: string;
};

const AuthForm = ({ authMode }: AuthenticationForm) => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthInput>();

  const onSubmit = (data: AuthInput) => {
    const { email, password } = data;
    authMode === "Sign Up"
      ? signUpWithEmailAndPassword(email, password)
          .then(() => {
            reset();
          })
          .catch((err) => {
            console.log(err, "Sign Up Failed.");
          })
      : logInWithEmailAndPassword(email, password)
          .then(() => {
            reset();
          })
          .catch((err) => {
            console.log(err);
          });
  };


  return (
    <>
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
      ) : null}
    </>
  );
};

export default AuthForm;

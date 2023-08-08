import { useForm } from "react-hook-form";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { signUpWithEmailAndPassword } from "../../firebase/auth/EmailAuth";

export type AuthInput = {
  email: string;
  password: string;
};

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInput>();

  const onSubmit = (data: AuthInput) => {
    const { email, password } = data;
    signUpWithEmailAndPassword(email, password).catch((err) => {
      console.log(err, "Sign Up Failed.");
    });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out");
      })
      .catch((err) => {
        console.log(err, "Not signed out.");
      });
  };

  return (
    <>
      {auth.currentUser?.isAnonymous ? (
        <section className="flex flex-col w-full items-center">
          <h1 className="font-bold text-2xl">Sign Up</h1>
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
                Sign Up
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

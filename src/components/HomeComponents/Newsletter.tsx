import { useRef } from "react";
import { useForm } from "react-hook-form";
import { subscribeToNewsletter } from "../../firebase/functions/SubscribeToNewsletter";

type SubscribeNewsletter = {
  name: string;
  email: string;
  review: string;
};

const Newsletter = () => {
  const subscribeRef = useRef<HTMLButtonElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeNewsletter>();

  const onSubmit = async (data: SubscribeNewsletter) => {
    const { name, email, review } = data;
    const subRef = subscribeRef.current;
    subRef ? (subRef.innerHTML = "Bringing You Abroad..") : null;
    await subscribeToNewsletter(name, email, review).catch(() => {
      console.log("Failed To Subscribe!");
    });
    reset();
    if (subRef) {
      subRef.style.transform = "rotateX(360deg)";
      subRef.innerHTML = "Subscribed!!";
      subRef.disabled = true;
      subRef.style.cursor = "not-allowed";
      subRef.title = "Subscribed";
    }
  };

  return (
    <>
      <section className=" mt-8 bg-[#f8f7f5] p-11 flex flex-col items-center font-outfit text-center dark:bg-slate-700 dark:text-white">
        <h2 className="font-bold text-3xl">Want First Dibs?</h2>
        <h3 className="font-medium text-base tracking-wide mt-5">
          Join our email list and be the first one to know about new limited
          edition products, material innovations, and lots of other fun updates.
        </h3>
        <div className="w-screen">
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="font-outfit font-medium outline-none p-3 mt-4 w-3/4 border-b-2 border-black dark:text-black"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="font-outfit font-medium outline-none p-3 mt-4 w-3/4 border-b-2 border-black dark:text-black"
              {...register("email", { required: true })}
            />
            <textarea
              placeholder="Leave Your Honest Review About This E-Commerce Store. Try Reporting Any Bugs Or Enhancments To Help Me Improve This Web Application."
              className="font-outfit font-medium outline-none p-3 mt-4 w-3/4 border-b-2 border-black dark:text-black"
              rows={4}
              {...register("review")}
            />
            <button
              className="bg-slate-900 font-bold uppercase tracking-wide text-white p-3 w-3/4 mt-2 transition-all duration-300 perspec"
              ref={subscribeRef}
            >
              Subscribe To Newsletter
            </button>
          </form>
          {errors.email?.type === "required" && (
            <p className="mt-1 text-red-500">Email is required.</p>
          )}
          {errors.name?.type === "required" && (
            <p className="mt-1 text-red-500">Name is required.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Newsletter;

const JoinList = () => {
  return (
    <>
      <section className=" mt-8 bg-[#f8f7f5] p-11 flex flex-col items-center font-outfit text-center dark:bg-slate-700 dark:text-white">
        <h2 className="font-bold text-3xl">Want First Dibs?</h2>
        <h3 className="font-medium text-base tracking-wide mt-5">
          Join our email list and be the first one to know about new limited
          edition products, material innovations, and lots of other fun updates.
        </h3>
        <div className="w-screen">
          <input
            type="email"
            name="email-Address"
            placeholder="Enter Your Email Address"
            className="font-outfit font-medium outline-none p-3 mt-4 w-3/4 border-b-2 border-black"
          />
          <button className="bg-slate-900 font-bold uppercase tracking-wide text-white p-3 w-3/4 mt-2">
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
};

export default JoinList;

const Hero = () => {
  return (
    <>
      <section className="hero relative mt-16">
        <figure className="absolute top-0">
          <img
            src={
              "https://images.unsplash.com/photo-1512507073059-e987cb5dfce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzJTIwb24lMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            className="w-screen h-100 object-cover"
            alt="Hero Section Shoes And Clothing Image."
          />
        </figure>
        <section className="absolute top-[30vh] text-center bottom-10 text-white font-outfit flex flex-col items-baseline px-4 font-semibold">
          <div className=" flex justify-center flex-col gap-y-4">
            <h1 className="text-3xl">Chase Views In Breezy Shoes</h1>
            <h2 className="text-base">
              The Lightweight Tree Runner is ready for anything summer throws at
              you.
            </h2>
            <div className="buttons space-x-3 flex">
              <button className="bg-white text-black px-4 py-3 w-2/4 cursor-pointer rounded-md uppercase">
                Shop Men
              </button>
              <button className="bg-white text-black px-4 py-3 w-2/4 cursor-pointer rounded-md uppercase">
                Shop Women
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;

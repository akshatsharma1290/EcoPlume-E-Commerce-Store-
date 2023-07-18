import { useQuery } from "@tanstack/react-query";
import apiService from "../apiService";

const Hero = () => {
  const query = useQuery({
    queryKey: ["products", { category: "shoes", location: "mountains" }],
    queryFn: () => apiService("shoes in mountains", 1), 
  });

  return (
    <>
      <section className="hero relative mt-16">
        <figure className="absolute top-0">
          <img
            src={query.data?.results[0].urls.full}
            className="w-screen h-100 object-cover"
            alt="Hero Section Shoes And Clothing Image."
          />
        </figure>
        <section className="absolute top-64 text-center bottom-10 text-white font-outfit flex flex-col items-baseline px-4 font-semibold">
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

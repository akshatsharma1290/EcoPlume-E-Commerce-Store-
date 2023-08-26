import { useState, useEffect } from "react";
import Buttons from "../Reusables/Buttons";
import { ApiResponse } from "../../utilities/api/apiService";

type HeroImage = {
  data: ApiResponse;
};

type Results = {
  id: string;
  alt_description: string;
  description: string;
  urls: {
    regular: string;
  };
}[];

const Hero = ({ data }: HeroImage) => {
  const [results, setResults] = useState<Results | null>(null);

  useEffect(() => {
    const visibleItems = Math.ceil(window.innerWidth / 800);
    const visibleImages = data.results.slice(0, visibleItems);
    setResults(visibleImages);
  }, [data.results]);


  return (
    <>
      <section className="hero relative">
        <picture className="flex overflow-hidden">
          <aside className="absolute w-full h-full bg-[#00000070]"></aside>
          {results?.map((item) => {
            return (
              <img
              key={item.id}
                className="h-100 object-cover w-[50rem]"
                src={item.urls.regular}
                alt={item.alt_description}
              />
            );
          })}
        </picture>
        <section className="absolute top-64 text-center bottom-10 text-white font-outfit flex flex-col items-baseline px-4 md:px-7 xl:px-10 font-semibold">
          <div className=" flex justify-center flex-col gap-y-4">
            <h1 className="text-3xl xl:text-4xl">
              Chase Views In Breezy Shoes
            </h1>
            <h2 className="text-base xl:text-xl">
              The Lightweight Tree Runner is ready for anything summer throws at
              you.
            </h2>
            <div className="buttons space-x-3 flex">
              <Buttons />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;

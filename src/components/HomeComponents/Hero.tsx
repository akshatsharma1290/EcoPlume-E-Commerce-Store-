import Buttons from "../Reusables/Buttons";
import HeroImage1 from "../../assets/HeroImage1.jpg";
import HeroImage2 from "../../assets/HeroImage2.jpg";
import HeroImage3 from "../../assets/HeroImage3.jpg";

const Hero = () => {
  const heroImages = [HeroImage1, HeroImage2, HeroImage3];

  const renderImages = () => {
    let num = 0;
    if (window.innerWidth <= 888) {
      num = 1;
    } else if (window.innerWidth <= 1775) {
      num = 2;
    } else {
      num = 3;
    }
    const renderedImages = heroImages
      .slice(0, num)
      .map((item, index) => (
        <img
          key={index}
          src={item}
          className="h-100 object-cover"
          alt="Hero Section Shoes And Clothing Image."
        />
      ));

    return renderedImages;
  };
  return (
    <>
      <section className="hero relative">
        <picture className="flex overflow-hidden">{renderImages()}</picture>
        <section className="absolute top-64 text-center bottom-10 text-white font-outfit flex flex-col items-baseline px-4 font-semibold">
          <div className=" flex justify-center flex-col gap-y-4">
            <h1 className="text-3xl">Chase Views In Breezy Shoes</h1>
            <h2 className="text-base">
              The Lightweight Tree Runner is ready for anything summer throws at
              you.
            </h2>
            <div className="buttons space-x-3 flex">
              <Buttons color={"white"} text={"black"} />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;

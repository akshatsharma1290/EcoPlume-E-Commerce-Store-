import HeroImg from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <img
          src={HeroImg}
          className="w-screen h-[30rem] object-cover"
          alt="Hero Section Shoes And Clothing Image."
        />
      </section>
    </>
  );
};

export default Hero;

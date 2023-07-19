import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import ShoeAd from "../components/ShoeAd";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Gallery />
        <ShoeAd />
        <Gallery/>
      </main>
    </>
  );
};

export default Home;

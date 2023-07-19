import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import JoinList from "../components/JoinList";
import ShoeAd from "../components/ShoeAd";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Gallery queryText="Shoes" perPage={6} orientation="landscape" defaultText="Men's Tree Runner" galleryName="Best Shoes"/>
        <ShoeAd />
        <Gallery queryText="T-Shirts" perPage={6} orientation="landscape" defaultText="Men's Sea Tee" galleryName="Best Clothes"/>
        <JoinList/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;

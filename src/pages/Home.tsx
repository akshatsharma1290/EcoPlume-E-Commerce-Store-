import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import JoinList from "../components/JoinList";
import ShoeAd from "../components/ShoeAd";
import { useQuery } from "@tanstack/react-query";
import getImages from "../utilities/apiService";
import Loader from "../components/Loader";

const Home = () => {
  const perPage = 6;
  const orientation = "landscape";

  const shoesQuery = useQuery({
    queryKey: ["images", "Sneakers", perPage, orientation],
    queryFn: () => getImages("Sneakers", perPage, orientation),
    refetchOnWindowFocus: false,
    retry: 2,
    staleTime : 300000
  });

  const shirtQuery = useQuery({
    queryKey: ["images", "T-Shirts", perPage, orientation],
    queryFn: () => getImages("T-Shirts", perPage, orientation),
    refetchOnWindowFocus: false,
    retry: 2,
    staleTime : 300000
  });

  if (shoesQuery.isFetching || shirtQuery.isFetching) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Hero />
        <Gallery
          data={shoesQuery.data}
          defaultText="Tree Runner"
          galleryName="Best Shoes"
        />
        <ShoeAd />
        <Gallery
          data={shirtQuery.data}
          defaultText="Sea Tee"
          galleryName="Best Clothes"
        />
        <JoinList />
        <Footer />
      </main>
    </>
  );
};

export default Home;

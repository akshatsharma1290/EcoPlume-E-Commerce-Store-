import Footer from "../components/HomeComponents/Footer";
import Gallery from "../components/GalleryComponents/Gallery";
import Hero from "../components/HomeComponents/Hero";
import JoinList from "../components/HomeComponents/JoinList";
import { useQuery } from "@tanstack/react-query";
import getImages from "../utilities/api/apiService";
import Loader from "../components/Reusables/Loader";
import { useAppSelector } from "../store/hooks";
import { loadingSelector } from "../store/slices/loadingSlice";

const Home = () => {
  const perPage = 6;
  const orientation = "landscape";
  const isLoading = useAppSelector(loadingSelector);

  const shoesQuery = useQuery({
    queryKey: ["images", "Sneakers", perPage, orientation],
    queryFn: () => getImages("Sneakers", perPage, orientation),
    refetchOnWindowFocus: false,
    retry: 2,
    staleTime: 300000,
  });

  const shirtQuery = useQuery({
    queryKey: ["images", "T-Shirts", perPage, orientation],
    queryFn: () => getImages("T-Shirts", perPage, orientation),
    refetchOnWindowFocus: false,
    retry: 2,
    staleTime: 300000,
  });

  if (isLoading || shoesQuery.isFetching || shirtQuery.isFetching) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Hero />
        <Gallery
          data={shoesQuery.data}
          galleryName="Best Shoes"
          type="shoes"
          product="sneaker"
        />
        <Gallery
          data={shirtQuery.data}
          galleryName="Best Clothes"
          type="T-Shirts"
          product="t-shirts"
        />
        <JoinList />
        <Footer />
      </main>
    </>
  );
};

export default Home;

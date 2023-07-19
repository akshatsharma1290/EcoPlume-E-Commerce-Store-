import GalleryItem from "./GalleryItem";
import { useQuery } from "@tanstack/react-query";
import getImages from "../apiService";

const Gallery = () => {
  const queryText = "Shoes";
  const perPage = 6;
  const orientation = "landscape";

  const query = useQuery({
    queryKey: ["images", queryText, perPage, orientation],
    queryFn: () => getImages(queryText, perPage, orientation),
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <>
      <section className="favourites mt-5 flex flex-col items-center w-screen">
        <h2 className="font-outfit font-bold text-3xl tracking-wide  ">
          Our Favorites
        </h2>
        <hr className="border-2 border-slate-300 my-3 w-screen" />
        <div className="w-screen overflow-auto mt-5">
          <div className="flex w-fit mx-4">
            {query.data?.results.map((data) => {
              return (
                <GalleryItem
                  key={data.id}
                  imageUrl={data.urls.regular}
                  altText={data.alt_description}
                  title={data.description || `Men's Tree Runner ${Math.floor(Math.random()*100 + 1)}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

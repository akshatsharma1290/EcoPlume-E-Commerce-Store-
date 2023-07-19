import GalleryItem from "./GalleryItem";
import { useQuery } from "@tanstack/react-query";
import getImages from "../apiService";

type GalleryProps = {
  queryText : string
  perPage : number
  orientation : "portrait" | "landscape" | "squarish"
  defaultText : string
  galleryName : string
}

const Gallery = ({queryText , perPage , orientation , defaultText , galleryName} : GalleryProps) => {

  const query = useQuery({
    queryKey: ["images", queryText, perPage, orientation],
    queryFn: () => getImages(queryText, perPage, orientation),
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <>
      <section className="favourites mt-10 flex flex-col items-center w-screen">
        <h2 className="font-outfit font-bold text-3xl tracking-wide  ">
          {galleryName}
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
                  title={`${defaultText} ${Math.floor(Math.random()*100 + 1)}`}
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

import { useState } from "react";
import GalleryItem from "./GalleryItem";
import { ApiResponse } from "../../utilities/api/apiService";
import { setProductItems } from "../../store/slices/productSlice";
import generatePrice from "../../utilities/RandomGenerators/generatePrice";
import CarouselArrow from "./CarouselArrow";
import { randomTitle } from "../../utilities/RandomGenerators/generateTitle";
import { useAppDispatch } from "../../store/hooks";

type GalleryProps = {
  data?: ApiResponse;
  galleryName: string;
  product: string;
};

const Gallery = ({ data, galleryName, product }: GalleryProps) => {
  const dispatch = useAppDispatch();
  const [transformValue, setTransformValue] = useState(0);

  return (
    <>
      <section className="mt-5 flex flex-col items-center w-screen relative dark:text-white">
        <h2 className="font-outfit font-bold text-3xl tracking-wide  ">
          {galleryName}
        </h2>
        <hr className="border-2 border-slate-300 my-3 w-screen" />
        <CarouselArrow
          transformValue={transformValue}
          setTransformValue={setTransformValue}
        />
        <div className="gallery w-screen overflow-auto mt-5 py-4">
          <div
            className="flex w-fit mx-4 transition-all"
            style={{ transform: `translateX(${transformValue}px)` }}
          >
            {data?.results.map((data) => {
              const title = randomTitle()
              return (
                <div
                  key={data.id}
                  onClick={() => {
                    dispatch(
                      setProductItems({
                        Imgurl: data.urls.regular,
                        product: product,
                        title: title,
                        price: generatePrice(),
                      })
                    );
                  }}
                >
                  <GalleryItem
                    imageUrl={data.urls.regular}
                    altText={data.alt_description}
                    title={title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

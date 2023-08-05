import GalleryItem from "./GalleryItem";
import { ApiResponse } from "../../utilities/api/apiService";
import { useAppDispatch } from "../../store/hooks";
import { setProductItems } from "../../store/slices/productSlice";
import generatePrice from "../../utilities/RandomGenerators/generatePrice";
import { FaChevronRight , FaChevronLeft } from "react-icons/fa";

type GalleryProps = {
  data?: ApiResponse;
  defaultText: string;
  galleryName: string;
  type: string;
  product: string;
};

const Gallery = ({
  data,
  galleryName,
  defaultText,
  type,
  product,
}: GalleryProps) => {
  const dispatch = useAppDispatch();

  const title = `${defaultText} ${Math.floor(Math.random() * 100 + 1)}`;

  return (
    <>
      <section className="mt-10 flex flex-col items-center w-screen">
        <h2 className="font-outfit font-bold text-3xl tracking-wide  ">
          {galleryName}
        </h2>
        <hr className="border-2 border-slate-300 my-3 w-screen" />
        <div className=" gallery w-screen overflow-auto mt-5">
          <div className="flex w-fit mx-4">
            {data?.results.map((data) => {
              return (
                <div
                  key={data.id}
                  onClick={() => {
                    dispatch(
                      setProductItems({
                        url: data.urls.regular,
                        type: type,
                        product: product,
                        title: title,
                        price : generatePrice()
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

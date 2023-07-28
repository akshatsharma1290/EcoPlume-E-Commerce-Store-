import { useQuery } from "@tanstack/react-query";
import getImages from "../utilities/apiService";
import { useAppDispatch, useAppSelector } from "../hooks";
import { searchQuerySelector } from "../store/searchQuerySlice";
import Loader from "./Loader";
import {
  generateTitle,
  randomCategory,
  randomTitle,
} from "../utilities/generateTitle";
import generatePrice from "../utilities/generatePrice";
import { Link } from "react-router-dom";
import { setProductItems } from "../store/productSlice";

const SearchItems = () => {
  const dispatch = useAppDispatch();

  const perPage = 10;
  const orientation = "squarish";
  const page = 1;

  const searchQueryValue = useAppSelector(searchQuerySelector);

  const searchQuery = useQuery({
    queryKey: ["product", searchQueryValue, perPage, orientation, page],
    queryFn: () => getImages(searchQueryValue, perPage, orientation, page),
    refetchOnWindowFocus: false,
    retry: 2,
    staleTime: 300000,
  });

  if (searchQuery.isFetching) {
    return <Loader />;
  }

  return (
    <>
      <section className="flex justify-center flex-wrap mt-5 gap-4">
        {searchQuery.data?.results.length ? (
          searchQuery.data?.results.map((data) => {
            const category = randomCategory();
            const title = randomTitle();
            return (
              <Link
                to={`/products/${title}?category=${category}`}
                key={data.id}
                className="flex flex-col w-[42%] shadow-lg shadow-slate-300"
                onClick={() => {
                  dispatch(
                    setProductItems({
                      url: data.urls.regular,
                      type: searchQueryValue,
                      product: searchQueryValue,
                      title: title,
                    })
                  );
                }}
              >
                <div>
                  <img
                    className="w-48"
                    src={data.urls.regular}
                    alt={data.alt_description}
                  />
                </div>
                <div className="p-2 pb-5">
                  <p className="font-bold">{generateTitle(category, title)}</p>
                  <p>{generatePrice()}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="text-red-500 text-xl uppercase">Not Found</div>
        )}
      </section>
    </>
  );
};

export default SearchItems;

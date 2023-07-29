import { useEffect } from "react";
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
import { paginationSelector, setPagination } from "../store/paginationSlice";
import { filterSelector, initialState } from "../store/filterSlice";
import { checkoutPriceSelector } from "../store/checkoutPriceSlice";
import toTitleCase from "../utilities/titleCase";

const SearchItems = () => {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector(paginationSelector);
  const checkoutPrice = useAppSelector(checkoutPriceSelector);
  const freeShippingPrice = 75;
  const filters = useAppSelector(filterSelector);
  const { category, price, shipping } = filters;



  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [pagination]);

  useEffect(() => {
    dispatch(setPagination(1));
  }, [dispatch]);


  const perPage = 10;
  const orientation = "squarish";

  const searchQueryValue = useAppSelector(searchQuerySelector);


  const searchQuery = useQuery({
    queryKey: ["product", searchQueryValue, perPage, orientation, pagination],
    queryFn: () =>
      getImages(searchQueryValue, perPage, orientation, pagination),
    refetchOnWindowFocus: false,
    retry: 2,
    staleTime: 300000,
  });

  if (searchQuery.isFetching) {
    return <Loader />;
  }

  const validItem = (itemCategory: string, itemPrice: number) => {
    if (filters === initialState) return true;

    let isValidItem = true;

    if (category !== "") {
      if (category !== itemCategory) {
        isValidItem = false;
      }
    }

    if (price && price?.length > 0) {
      for (let i = 0; i < price.length; i++) {
        if (itemPrice > price[i]) {
          isValidItem = false;
          return;
        }
      }
    }

    if (shipping === "Free" && checkoutPrice < freeShippingPrice) {
      if (itemPrice < freeShippingPrice) {
        isValidItem = false;
      }
    }

    return isValidItem;
  };

  return (
    <>
      <section className="flex justify-center flex-wrap mt-5 gap-4">
        {searchQuery.data?.results.length ? (
          searchQuery.data?.results.map((data) => {
            const category = randomCategory();
            const title = randomTitle();
            const price = generatePrice();
            if(validItem(toTitleCase(category), Number(price.slice(1)))){

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
                    <img src={data.urls.regular} alt={data.alt_description} />
                  </div>
                  <div className="p-2 pb-5">
                    <p className="font-bold">{generateTitle(category, title)}</p>
                    <p>{price}</p>
                  </div>
                </Link>
              )
            }
          })
        ) : (
          <div className="text-red-500 text-xl uppercase">Not Found</div>
        )}
      </section>
    </>
  );
};

export default SearchItems;

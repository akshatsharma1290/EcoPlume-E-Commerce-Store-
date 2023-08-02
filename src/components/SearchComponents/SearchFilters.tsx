import { useRef, useState, useEffect } from "react";
import FilterIcon from "../../assets/filters.svg";
import { BsArrowRight } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { filterSelector, setFilters } from "../../store/slices/filterSlice";
import { RxCross1 } from "react-icons/rx";

const SearchFilters = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const filterPanel = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const searchFilters = useAppSelector(filterSelector);
  const { category, price, shipping } = searchFilters;

  const [filtersCount, SetFiltersCount] = useState(0);

  useEffect(() => {
    const categoryLength = category ? 1 : 0;
    const priceLength = price ? price.length : 0;
    const shippingLength = shipping ? 1 : 0;

    // Sum up the lengths
    const totalFilters = categoryLength + priceLength + shippingLength;
    SetFiltersCount(totalFilters);
  }, [category, price, shipping]);

  const toggleFilterPanel = () => {
    if (filterPanel.current) {
      filterPanel.current.style.display = isPanelVisible ? "none" : "flex";
      filterPanel.current.style.right = isPanelVisible ? "-160vw" : "0";
      document.body.style.overflow = isPanelVisible ? "visible" : "hidden";
    }
    setIsPanelVisible(!isPanelVisible);
  };

  const removeCategory = () => {
    dispatch(setFilters({ category: "" }));
  };

  const removeShipping = () => {
    dispatch(setFilters({ shipping: "" }));
  };

  const addPriceFilter = (item: number) => {
    if (price && !price.includes(item)) {
      const newPrice = [...price];
      newPrice.push(item);
      dispatch(setFilters({ price: newPrice }));
    }
  };

  const removePriceFilter = (index: number) => {
    if (price) {
      const newPrice = [...price];
      newPrice.splice(index, 1);
      dispatch(setFilters({ price: newPrice }));
    }
  };

  const priceFilters = [30, 50, 75, 100, 130];

  return (
    <>
      <section className="my-3 px-6 flex justify-between">
        <p className="text-lg font-medium">
          {filtersCount} Filters Applied
        </p>
        <div
          className="flex uppercase border-2 border-black rounded-full p-1 w-28 gap-3 justify-center text-sm font-bold cursor-pointer"
          onClick={toggleFilterPanel}
        >
          Filters
          <img src={FilterIcon} alt="filter" />
        </div>
      </section>
      <div
        className={`filterPanel fixed w-screen h-screen bg-transparent top-0 z-50  right-[-160vw] transition-all hidden duration-75 justify-end`}
        ref={filterPanel}
      >
        <div className="bg-white w-2/3 px-4 h-screen shadow-cover space-y-4 font-medium overflow-y-auto">
          <div
            className="text-4xl py-3 border-b border-slate-500"
            onClick={toggleFilterPanel}
          >
            <BsArrowRight />
          </div>
          <div className="border-b border-slate-500 pb-4">
            <div className="flex justify-between mb-1">
              <p className="text-xl font-bold">Filter By:</p>
             {filtersCount > 0 ? <p className="underline flex items-center gap-1 text-base"
             onClick={()=>(dispatch(setFilters({category : "" , price : [] , shipping : ""})))}
             >Clear All</p> : null}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {category ? (
                <span className="flex items-center gap-2 p-2 border border-slate-500">
                  {category}{" "}
                  <span
                    className="p-1 rounded-full bg-slate-300"
                    onClick={removeCategory}
                  >
                    <RxCross1 />
                  </span>
                </span>
              ) : null}
              {price
                ? price.map((item, index) => {
                    return (
                      <span
                        key={item}
                        className="flex items-center gap-2 p-2 border border-slate-500"
                      >
                        {item}{" "}
                        <span
                          className="p-1 rounded-full bg-slate-300"
                          onClick={() => {
                            removePriceFilter(index);
                          }}
                        >
                          <RxCross1 />
                        </span>
                      </span>
                    );
                  })
                : null}
              {shipping ? (
                <span className="flex items-center gap-2 p-2 border border-slate-500">
                  {shipping}{" "}
                  <span
                    className="p-1 rounded-lg bg-slate-400"
                    onClick={removeShipping}
                  >
                    <RxCross1 />
                  </span>
                </span>
              ) : null}
            </div>
          </div>
          <div className="categoryFilter flex flex-col gap-3 text-lg border-b border-slate-500 pb-4">
            <p className="uppercase">Category</p>
            <button
              className={`p-2 border border-black ${
                category === "Women"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => {
                dispatch(setFilters({ category: "Women" }));
              }}
            >
              Women
            </button>
            <button
              className={`p-2 border border-black ${
                category === "Men"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => {
                dispatch(setFilters({ category: "Men" }));
              }}
            >
              Men
            </button>
          </div>
          <div className="priceFilter flex flex-col gap-3 text-lg border-b border-slate-500 pb-4">
            <p className="uppercase">Price</p>
            {priceFilters.map((item) => {
              return (
                <button
                  key={item}
                  className={`p-1 border border-black ${
                    price && price.includes(item)
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => {
                    addPriceFilter(item);
                  }}
                >
                  Under ${item}$
                </button>
              );
            })}
          </div>
          <div className="shippingFilter flex flex-col gap-3 text-lg border-b border-slate-500 pb-4">
            <p className="uppercase">Shipping</p>
            <button
              className={`p-2 border border-black ${
                shipping ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => {
                dispatch(setFilters({ shipping: "Free" }));
              }}
            >
              Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilters;

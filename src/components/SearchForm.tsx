import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch} from "../hooks";
import { setSearchQuery } from "../store/searchQuerySlice";

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const [searchValidItems, setsearchValidItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      const validItems = [
        "Shoes",
        "T-Shirts",
        "Shirts",
        "Pants",
        "Socks",
        "Pajamas",
        "Hoodies",
      ];

      const items = validItems.filter((value) => {
        return value.toLowerCase().includes(inputValue.toLowerCase());
      });

      setsearchValidItems(items);
    } else {
      setsearchValidItems([]);
    }
  }, [inputValue]);

  const handleSubmit = (searchQueryValue: string) => {
    dispatch(setSearchQuery(searchQueryValue));
    setInputValue("");
    setsearchValidItems([]);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-1">
        <div className="flex items-center gap-2">
          <input
            className="w-[75vw] h-12 px-3 bg-slate-200 text-slate-800 outline-none text-lg rounded-md"
            type="text"
            autoComplete="off"
            placeholder="Enter Search Term"
            value={inputValue}
            onChange={handleSearch}
            ref={inputRef}
          />
          <p
            onClick={() => {
              setInputValue("");
            }}
            className="text-slate-600 cursor-pointer"
          >
            cancel
          </p>
        </div>
        <section className="flex mt-1 justify-center items-center gap-3">
          <div className="w-[74vw] flex flex-col bg-slate-200 text-lg overflow-scroll">
            {searchValidItems.map((value, index) => {
              return (
                <button
                  key={index}
                  className="h-12 border border-black"
                  type="submit"
                  onClick={() => {
                    handleSubmit(value);
                  }}
                >
                  {value}
                </button>
              );
            })}
          </div>
          <p className="invisible">Cancel</p>
        </section>
      </section>
    </>
  );
};

export default SearchForm;

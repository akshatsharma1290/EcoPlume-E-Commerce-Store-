import { useRef, useState } from "react";
import FilterIcon from "../assets/filters.svg";
import { BsArrowRight } from "react-icons/bs";

const SearchFilters = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const filterPanel = useRef<HTMLDivElement>(null);

  const toggleFilterPanel = () => {
    if (filterPanel.current) {
      filterPanel.current.style.right = isPanelVisible ? "-160vw" : "0";
      document.body.style.overflow = isPanelVisible ? "visible" : "hidden";
    }
    setIsPanelVisible(!isPanelVisible);
  };
  return (
    <>
      <section className="my-3 px-6 flex justify-between">
        <p className="text-lg font-medium">No Filters Applied</p>
        <div
          className="flex uppercase border-2 border-black rounded-full p-1 w-28 gap-3 justify-center text-sm font-bold cursor-pointer"
          onClick={toggleFilterPanel}
        >
          Filters
          <img src={FilterIcon} alt="filter" />
        </div>
      </section>
      <div
        className="filterPanel absolute w-screen h-screen bg-transparent top-0 z-50  right-[-160vw] transition-all duration-75 flex justify-end"
        ref={filterPanel}
      >
        <div className="bg-white w-2/3 h-screen shadow-cover ">
          <div
            className="text-4xl px-4 py-3 border-b border-slate-500"
            onClick={toggleFilterPanel}
          >
            <BsArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilters;

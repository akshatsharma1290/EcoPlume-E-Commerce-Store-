import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setSearchQuery } from "../../store/slices/searchQuerySlice";
import { setFilters } from "../../store/slices/filterSlice";

const Buttons = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Link
        to={`/search`}
        className="bg-white text-black hover:text-white hover:bg-slate-900 px-4 py-3 w-2/4 cursor-pointer rounded-md uppercase transition-all text-center"
        onClick={() => {
          dispatch(setSearchQuery("sneakers"));
          dispatch(setFilters({ category: "Men" }));
        }}
      >
        Shop Men
      </Link>
      <Link
        to={`/search`}
        className="bg-white text-black hover:text-white hover:bg-slate-900 px-4 py-3 w-2/4 cursor-pointer rounded-md uppercase transition-all text-center"
        onClick={() => {
          dispatch(setSearchQuery("sneakers"));
          dispatch(setFilters({ category: "Women" }));
        }}
      >
        Shop Women
      </Link>
    </>
  );
};

export default Buttons;

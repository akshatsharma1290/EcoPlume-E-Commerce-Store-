import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setSearchQuery } from "../../store/slices/searchQuerySlice";

type ButtonsProps = {
  color: string;
  text: string;
};

const Buttons = ({ color, text }: ButtonsProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Link
        to={`/search`}
        className={`bg-${color} text-${text} px-4 py-3 w-2/4 cursor-pointer rounded-md uppercase transition-all text-center`}
        onClick={() => {
          dispatch(setSearchQuery("men sneakers"));
        }}
      >
        Shop Men
      </Link>
      <Link
        to={`/search`}
        className={`bg-${color} text-${text}  px-4 py-3 w-2/4 cursor-pointer rounded-md uppercase transition-all text-center`}
        onClick={() => {
          dispatch(setSearchQuery("women sneakers"));
        }}
      >
        Shop Women
      </Link>
    </>
  );
};

export default Buttons;

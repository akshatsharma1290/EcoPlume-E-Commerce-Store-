import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setSearchQuery } from "../../store/slices/searchQuerySlice";
import { hideCart } from "../../store/slices/cartPageTransform";

type AdditionalLinksProps = {
  cartValue: number;
};

const AdditionalLinks = ({ cartValue }: AdditionalLinksProps) => {
  const normalLinks = ["Socks", "Towels", "Cups" , "Shorts" , "Pants"];
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="flex flex-col gap-4 items-center mt-7 font-bold tracking-wide">
        <p className="text-lg">
          {cartValue === 0 ? "Your Cart Is Empty" : null}
        </p>
        {normalLinks.map((value) => {
          return (
            <Link
              to={"/search"}
              key={value}
              className="border-black text-center border-2 p-2 text-base w-2/4 sm:w-11/12 uppercase hover:bg-black hover:text-white transition-all duration-75 "
              onClick={() => {
                dispatch(setSearchQuery(value));
                dispatch(hideCart());
              }}
            >
              Shop {value}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AdditionalLinks;

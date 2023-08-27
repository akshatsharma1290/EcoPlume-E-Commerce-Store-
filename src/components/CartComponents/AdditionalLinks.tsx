import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setSearchQuery } from "../../store/slices/searchQuerySlice";
import { hideCart } from "../../store/slices/cartPageTransform";
import { FocusedElement, moveFocus } from "../../store/slices/focusSlice";

type AdditionalLinksProps = {
  cartValue: number;
};

const AdditionalLinks = ({ cartValue }: AdditionalLinksProps) => {
  const normalLinks = ["Socks", "Towels", "Cups", "Shorts", "Pants"];
  const dispatch = useAppDispatch();
  const lastLinkRef = useRef<HTMLAnchorElement | null>(null);

  const handleLinkClick = (value: string) => {
    dispatch(setSearchQuery(value));
    dispatch(hideCart());
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center mt-7 font-bold tracking-wide">
        <p className="text-lg">
          {cartValue === 0 ? "Your Cart Is Empty" : null}
        </p>
        {normalLinks.map((value, index) => (
          <Link
            to={"/search"}
            key={value}
            className="border-black text-center border-2 p-2 text-base w-2/4 sm:w-11/12 uppercase hover:bg-black hover:text-white transition-all duration-75 dark:border-white"
            onClick={() => handleLinkClick(value)}
            onKeyDown={(e) => {
              if (e.key === "Tab" && index === normalLinks.length - 1) {
                e.preventDefault();
                dispatch(moveFocus(FocusedElement.CartPanel));
              }
            }}
            ref={index === normalLinks.length - 1 ? lastLinkRef : null}
          >
            Shop {value}
          </Link>
        ))}
      </div>
    </>
  );
};

export default AdditionalLinks;

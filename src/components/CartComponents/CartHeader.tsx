import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { hideCart } from "../../store/slices/cartPageTransform";
import { RxCross1 } from "react-icons/rx";
import Cart from "./Cart";
import { checkoutPriceSelector } from "../../store/slices/checkoutPriceSlice";
import { useEffect, useState } from "react";

const CartHeader = () => {
  const dispatch = useAppDispatch();
  const checkoutPrice = useAppSelector(checkoutPriceSelector);
  const freeShippingPrice = 75;
  const [shippingPrice, setshippingPrice] = useState(75);
  const [shippingPriceInPercent, setShippingPriceInPercent] = useState(0);

  useEffect(() => {
    freeShippingPrice > checkoutPrice
      ? setshippingPrice(freeShippingPrice - checkoutPrice)
      : null;
    freeShippingPrice > checkoutPrice
      ? setShippingPriceInPercent((checkoutPrice / freeShippingPrice) * 100)
      : setShippingPriceInPercent(100);
  }, [checkoutPrice]);

  return (
    <>
      <span
        className="cross absolute top-8 left-5 text-3xl cursor-pointer"
        onClick={() => {
          dispatch(hideCart());
        }}
      >
        <RxCross1 strokeWidth={1} />
      </span>
      <div className="mt-7 gap-4 text-sm md:text-base flex flex-col items-center w-screen">
        <Cart />
        <p>
          {checkoutPrice < freeShippingPrice
            ? `You're $${shippingPrice} away from shipping`
            : `Congrats! You got free standard shipping.`}
        </p>
        <div className="range bg-slate-200 w-11/12 h-2 rounded-lg">
          <div
            className="bg-slate-500 rounded-lg h-full transition-all duration-700"
            style={{ width: `${shippingPriceInPercent}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default CartHeader;

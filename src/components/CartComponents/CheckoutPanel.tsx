import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cartItemsSelector } from "../../store/slices/cartItemsSlice";
import {
  checkoutPriceSelector,
  setCheckoutPrice,
} from "../../store/slices/checkoutPriceSlice";
import StripeBuyButton from "../CheckoutComponents/BuyButton.tsx";

const CheckoutPanel = () => {
  const checkoutPrice = useAppSelector(checkoutPriceSelector);
  const shippingPrice = checkoutPrice > 75 ? "Free" : "$10";
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartItemsSelector);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.map((item) => {
      if (item.price && item.quantity) {
        const price = Number(item.price.slice(1));
        totalPrice += price * item.quantity;
      }
    });

    dispatch(setCheckoutPrice(totalPrice));
  }, [cartItems, dispatch]);
  return (
    <>
      <section className="flex flex-col items-center px-3">
        <div className="border-b w-11/12 my-5 pb-5 border-slate-500 flex flex-col gap-3">
          <div className="flex justify-between text-base tracking-wide font-medium">
            <p>Subtotal</p>
            <p>${checkoutPrice}</p>
          </div>
          <div className="flex justify-between text-base tracking-wide font-medium">
            <p>Shipping</p>
            <p className="uppercase">{shippingPrice}</p>
          </div>
          <div className="flex justify-between text-base tracking-wide font-medium">
            <p>Total</p>
            <p>
              ${shippingPrice === "Free" ? checkoutPrice : checkoutPrice + 10}
            </p>
          </div>
        </div>
        <button className="w-[93vw] font-bold bg-slate-900 rounded-md text-white h-12 mt-4 self-center uppercase tracking-wide cursor-pointer dark:bg-white dark:text-black">
          Proceed to checkout
        </button>
        <StripeBuyButton />
      </section>
    </>
  );
};

export default CheckoutPanel;

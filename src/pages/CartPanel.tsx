import { useEffect } from "react";
import AdditionalLinks from "../components/CartComponents/AdditionalLinks";
import CartHeader from "../components/CartComponents/CartHeader";
import CartItems from "../components/CartComponents/CartItems";
import PricePanel from "../components/CheckoutComponents/PricePanel";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { cartItemsSelector } from "../store/slices/cartItemsSlice";
import { cartPageTransformSelector } from "../store/slices/cartPageTransform";
import { cartSelector, setCartValue } from "../store/slices/cartSlice";

const CartPanel = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartItemsSelector);
  const transformValue = useAppSelector(cartPageTransformSelector);
  const cartValue = useAppSelector(cartSelector);
  useEffect(() => {
    let totalCartItems = 0;
    cartItems.map((item) => {
      item.quantity ? (totalCartItems += item.quantity) : 0;
    });
    dispatch(setCartValue(totalCartItems));
  }, [cartItems, dispatch]);

  return (
    <>
      <section
        className={`cartPage h-screen overflow-auto w-screen bg-white text-black absolute top-0 z-40 font-outfit transition-all pb-5 dark:bg-slate-700 dark:text-white ${transformValue === 100 ? "invisible" : "visible"}`}
        style={{ transform: `translateX(${transformValue}%)` }}
      >
        <CartHeader />
        <CartItems />
        {cartValue > 0 ? <PricePanel /> : null}
        <AdditionalLinks cartValue={cartValue} />
      </section>
    </>
  );
};

export default CartPanel;

import { useEffect } from "react";
import AdditionalLinks from "../components/AdditionalLinks";
import CartHeader from "../components/CartHeader";
import CartItems from "../components/CartItems";
import CheckoutPanel from "../components/CheckoutPanel";
import { useAppSelector, useAppDispatch } from "../hooks";
import { cartItemsSelector } from "../store/cartItemsSlice";
import { cartPageTransformSelector } from "../store/cartPageTransform";
import { cartSelector, setCartValue } from "../store/cartSlice";

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
        className="cartPage h-screen w-screen bg-white absolute top-0 z-40 font-outfit transition-all"
        style={{ transform: `translateX(${transformValue}%)` }}
      >
        <CartHeader />
        <CartItems />
        {cartValue > 0 ? <CheckoutPanel /> : null}
        <AdditionalLinks cartValue={cartValue} />
      </section>
    </>
  );
};

export default CartPanel;

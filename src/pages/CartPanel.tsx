import AdditionalLinks from "../components/AdditionalLinks";
import CartHeader from "../components/CartHeader";
import CartItems from "../components/CartItems";
import { useAppSelector } from "../hooks";
import { cartPageTransformSelector } from "../store/cartPageTransform";
import { cartSelector } from "../store/cartSlice";

const CartPanel = () => {
  const transformValue = useAppSelector(cartPageTransformSelector);
  const cartValue = useAppSelector(cartSelector)
  return (
    <>
      <section
        className="cartPage h-screen w-screen bg-white absolute top-0 z-40 font-outfit transition-all"
        style={{ transform: `translateX(${transformValue}%)` }}
      >
        <CartHeader />
        <CartItems/>
        <AdditionalLinks cartValue={cartValue} />
      </section>
    </>
  );
};

export default CartPanel;

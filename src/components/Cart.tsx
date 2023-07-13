import { BsCart } from "react-icons/bs";
import { cartSelector } from "../store/cartSlice";
import { useAppSelector } from "../hooks";

const Cart = () => {
  const cartValue = useAppSelector(cartSelector);

  return (
    <>
      <section className="cart text-4xl relative cursor-pointer">
        <span className="absolute text-sm font-kanit font-bold w-[2.4rem] text-center top-[0.37rem] left-0">
          {cartValue}
        </span>
        <BsCart />
      </section>
    </>
  );
};

export default Cart;

import { useAppDispatch } from "../hooks";
import { hideCart } from "../store/cartPageTransform";
import { RxCross1 } from "react-icons/rx";
import Cart from "./Cart";


const CartHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <span
        className="cross absolute top-8 left-5 text-3xl"
        onClick={() => {
          dispatch(hideCart());
        }}
      >
        <RxCross1 strokeWidth={1} />
      </span>
      <div className="mt-7 gap-4 text-sm flex flex-col items-center w-screen">
        <Cart />
        <p>You're $75 away from shipping</p>
        <span className="range bg-slate-200 w-5/6 h-2 rounded-lg"></span>
      </div>
    </>
  );
};

export default CartHeader;

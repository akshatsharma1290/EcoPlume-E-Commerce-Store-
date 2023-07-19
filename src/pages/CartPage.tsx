import Cart from "../components/Cart";
import { RxCross1 } from "react-icons/rx";
import { cartPageTransformSelector } from "../store/cartPageTransform";
import { useAppSelector } from "../hooks";
import { useAppDispatch } from "../hooks";
import { hideCart } from "../store/cartPageTransform";

const CartPage = () => {
  const transformValue = useAppSelector(cartPageTransformSelector);
  const dispatch = useAppDispatch();

  return (
    <>
      <section
        className="cartPage h-screen w-screen bg-white absolute top-0 z-40 font-outfit transition-all"
        style={{ transform: `translateX(${transformValue}%)` }}
      >
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
        <div className="flex flex-col gap-4 items-center mt-7 font-bold tracking-wide">
          <p className="text-lg">Your Cart Is Empty</p>
          <button className="border-black border-2 p-2 text-base w-2/4 uppercase">
            Shop Men's
          </button>
          <button className="border-black border-2 p-2 text-base w-2/4 uppercase">
            Shop Women's
          </button>
          <button className="border-black border-2 p-2 text-base w-2/4 uppercase">
            Shop Socks
          </button>
          <button className="border-black border-2 p-2 text-base w-2/4 uppercase">
            Shop Towels
          </button>
          <button className="border-black border-2 p-2 text-base w-2/4 uppercase">
            Shop Cups
          </button>
        </div>
      </section>
    </>
  );
};

export default CartPage;

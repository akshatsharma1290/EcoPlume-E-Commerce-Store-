import { useDispatch } from "react-redux";
import SuccessGif from "../../assets/success.gif";
import { Link } from "react-router-dom";
import { setCartItem } from "../../store/slices/cartItemsSlice";
import { useAppSelector } from "../../store/hooks";
import { loadingSelector } from "../../store/slices/loadingSlice";
import Loader from "../Reusables/Loader.tsx"

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const isLoading = useAppSelector(loadingSelector)

  const removeCartItems = () => {
    dispatch(setCartItem([]));
  };

  return (
    <>
        {isLoading ? <Loader/> : null}
      <section className="flex flex-col justify-center items-center h-screen bg-[#2ecc71] overflow-hidden">
        <img src={SuccessGif} alt="Payment Success Animation" />
        <h1 className="text-white font-outfit tracking-wide font-bold text-3xl text-center mt-2">
          Payment Successful
        </h1>
        <div className="flex flex-col items-center w-80">
          <Link
            to={"/"}
            className="mt-4 bg-white w-11/12 h-10 grid place-content-center text-xl rounded-md font-kanit"
          >
            Go To Home
          </Link>
          <button
            onClick={removeCartItems}
            className="mt-4 bg-white w-11/12 h-10 grid place-content-center text-xl rounded-md font-kanit"
          >
            Remove Shopped Items
          </button>
        </div>
      </section>
    </>
  );
};

export default PaymentSuccess;

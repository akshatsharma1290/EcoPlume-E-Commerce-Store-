import { useAppSelector } from "../hooks";
import { checkoutPriceSelector } from "../store/checkoutPriceSlice";

const CheckoutPanel = () => {
  const checkoutPrice = useAppSelector(checkoutPriceSelector);
  const shippingPrice = checkoutPrice > 75 ? "Free" : "$10";
  return (
    <>
      <section className="flex flex-col items-center">
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
        <button className="w-[93vw] font-bold bg-slate-900 rounded-md text-white h-12 mt-4 self-center uppercase tracking-wide cursor-pointer">
          Proceed to checkout
        </button>
      </section>
    </>
  );
};

export default CheckoutPanel;

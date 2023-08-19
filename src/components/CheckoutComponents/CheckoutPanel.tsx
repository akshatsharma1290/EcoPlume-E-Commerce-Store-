import { useAppSelector } from "../../store/hooks";
import { loadingSelector } from "../../store/slices/loadingSlice";
import StripeBuyButton from "./BuyButton";
import Loader from "../Reusables/Loader.tsx";

const CheckoutPanel = () => {
  const isLoading = useAppSelector(loadingSelector);
  return (
    <>
      {isLoading ? <Loader /> : null}
      <section className="flex flex-col justify-center items-center h-screen dark:text-white">
        <StripeBuyButton />
        <article className="text-center font-outfit font-medium px-2 mt-4">
          <p>Kindly Fill Any Amount.</p>
          <p>
            This is a test payment you can use a test card to see it working
          </p>
          <p>Payment Intents And Live Mode Will Be Integerated Soon.</p>
        </article>
      </section>
    </>
  );
};

export default CheckoutPanel;

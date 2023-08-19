import StripeBuyButton from "./BuyButton";

const CheckoutPanel = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
        <article className="text-center font-outfit font-medium">
            <p>Kindly Fill Any Amount.</p>
            <p>This Is Just A Test Payment.</p>
        </article>
      <StripeBuyButton />
    </section>
  );
};

export default CheckoutPanel;

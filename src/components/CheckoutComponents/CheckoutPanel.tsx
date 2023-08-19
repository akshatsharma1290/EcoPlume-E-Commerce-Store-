import StripeBuyButton from "./BuyButton";

const CheckoutPanel = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <StripeBuyButton />
        <article className="text-center font-outfit font-medium px-2">
            <p>Kindly Fill Any Amount.</p>
            <p>This is a test payment you can use a test card to see it working</p>
            <p>Payment Intents And Live Mode Will Be Integerated Soon.</p>
        </article>
    </section>
  );
};

export default CheckoutPanel;

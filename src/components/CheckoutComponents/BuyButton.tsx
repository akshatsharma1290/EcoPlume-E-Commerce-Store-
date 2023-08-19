// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
interface ImportMetaEnvWithBuyButton extends ImportMetaEnv {
  VITE_BUY_BUTTON_ID: string;
  VITE_PUBLISHABLE_KEY: string;
}

const StripeBuyButton = () => {
  const buyButtonKeys = import.meta.env as ImportMetaEnvWithBuyButton;
  const buttonId = buyButtonKeys.VITE_BUY_BUTTON_ID;
  const publishableKey = buyButtonKeys.VITE_PUBLISHABLE_KEY;

  return (
    <>
      <stripe-buy-button
        buy-button-id={buttonId}
        publishable-key={publishableKey}
      ></stripe-buy-button>
    </>
  );
};

export default StripeBuyButton;

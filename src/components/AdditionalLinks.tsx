type AdditionalLinksProps = {
  cartValue: number;
};

const AdditionalLinks = ({cartValue} : AdditionalLinksProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center mt-7 font-bold tracking-wide">
        <p className="text-lg">
          {cartValue === 0 ? "Your Cart Is Empty" : null}
        </p>
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
    </>
  );
};

export default AdditionalLinks;

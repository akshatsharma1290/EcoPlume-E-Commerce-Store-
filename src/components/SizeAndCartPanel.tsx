type SizeAndCartPanelProps = {
  type: string;
};

const SizeAndCartPanel = ({ type }: SizeAndCartPanelProps) => {
  const shoesSizes = [5, 6, 7, 8, 9, 10, 11];
  const clothesSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const activeSize = type === "shoes" ? shoesSizes : clothesSizes;

  return (
    <>
      <div>
        <div className="mt-4 px-4 font-outfit flex flex-col">
          <p className="font-bold uppercase tracking-wide">Select Size : </p>
          <div className="flex gap-2 mt-2">
            {activeSize.map((item) => {
              return (
                <div
                  className="border border-slate-900 text-lg w-1/4 h-[11vw] flex justify-center items-center"
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <button className="bg-black w-[93vw] text-white h-12 mt-4 self-center">
            Select Size
          </button>
        </div>
      </div>
    </>
  );
};

export default SizeAndCartPanel;

import React, { useState } from "react";

type SizeAndCartPanelProps = {
  type: string;
  price: string;
};

const SizeAndCartPanel = ({ type, price }: SizeAndCartPanelProps) => {
  const shoesSizes = [5, 6, 7, 8, 9, 10, 11];
  const clothesSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const suitableSize = type === "shoes" ? shoesSizes : clothesSizes;

  const [selectedSize, setSelectedSize] = useState<number | string | null>(
    null
  );
  const [activeSize, setActiveSize] = useState<number | string | null>(null);

  const handleSizeSelect = (size: number | string) => {
    if (activeSize === size) {
      setSelectedSize(null);
      setActiveSize(null);
    } else {
      setSelectedSize(size);
      setActiveSize(size);
    }
  };

  return (
    <>
      <div>
        <div className="mt-4 px-4 font-outfit flex flex-col">
          <p className="font-bold uppercase tracking-wide">Select Size : </p>
          <div className="flex gap-2 mt-2">
            {suitableSize.map((item) => {
              return (
                <div
                  className={`border text-lg w-1/4 h-[11vw] flex justify-center items-center transition-all ${
                    selectedSize === item
                      ? "bg-slate-900 text-white"
                      : "bg-transparent text-black"
                  }`}
                  key={item}
                  onClick={() => handleSizeSelect(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <button
            className={`w-[93vw] font-bold text-white h-12 mt-4 self-center uppercase tracking-wide  ${
              selectedSize
                ? "bg-slate-900 cursor-pointer"
                : "bg-[#d3d4d5] cursor-not-allowed"
            }`}
            disabled={!selectedSize}
          >
            {selectedSize ? `Add To Cart - ${price}` : `Select Size`}
          </button>
        </div>
      </div>
    </>
  );
};

export default SizeAndCartPanel;

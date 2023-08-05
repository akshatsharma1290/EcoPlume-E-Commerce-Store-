import { useState } from "react";
import { addCartItem } from "../../store/slices/cartItemsSlice";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { productSelector } from "../../store/slices/productSlice";
import { showCart } from "../../store/slices/cartPageTransform";

type SizeAndCartPanelProps = {
  price: string;
};

const SizeAndCartPanel = ({ price }: SizeAndCartPanelProps) => {
  const dispatch = useAppDispatch();

  const productItems = useAppSelector(productSelector);
  const { url, title } = productItems;

  const size = [5, 6, 7, 8, 9, 10, 11]

  const [activeSize, setActiveSize] = useState<number | string | null>(null);

  const handleSizeSelect = (size: number | string) => {
    if (activeSize === size) {
      setActiveSize(null);
    } else {
      setActiveSize(size);
    }
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (activeSize) {
      dispatch(
        addCartItem({
          title,
          size: activeSize,
          imgUrl: url,
          price,
          quantity: 1,
        })
      );
      dispatch(showCart());
      e.currentTarget.blur();
    }
  };


  return (
    <>
      <div>
        <div className="mt-4 px-4 font-outfit flex flex-col">
          <p className="font-bold uppercase tracking-wide">Select Size : </p>
          <div className="flex gap-2 mt-2 ">
            {size.map((item) => {
              return (
                <div
                  className={`border-2 text-lg w-1/4 md:w-52 h-[11vw] md:h-[7vw] cursor-pointer flex justify-center items-center transition-all ${
                    activeSize === item
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
              activeSize
                ? "bg-slate-900 cursor-pointer"
                : "bg-[#d3d4d5] cursor-not-allowed"
            }`}
            disabled={!activeSize}
            onClick={handleAddToCart}
          >
            {activeSize ? `Add To Cart - ${price}` : `Select Size`}
          </button>
        </div>
      </div>
    </>
  );
};

export default SizeAndCartPanel;

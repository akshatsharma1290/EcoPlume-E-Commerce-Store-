import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useAppSelector } from "../hooks";
import React from "react";
import { cartItemsSelector } from "../store/cartItemsSlice";

const CartItems = () => {
  const cartItemDetails = useAppSelector(cartItemsSelector);

  return (
    <>
      <section className="flex flex-col items-center">
        {cartItemDetails.map((item, index) => {
          return index === 0 || item !== cartItemDetails[index - 1] ? (
            <React.Fragment key={String(item.title) + String(item.size)}>
              <div className="flex items-center w-11/12 mt-6 gap-4 font-outfit relative border-b border-slate-400 pb-3">
                <div>
                  <img
                    className="h-16 border-2 border-slate-900"
                    src={item.imgUrl}
                    alt={item.title}
                  />
                </div>
                <div className="flex">
                  <div>
                    <h2 className="font-bold tracking-wide">{item.title}</h2>
                    <h3 className="">Size : {item.size}</h3>
                    <div className="mt-1 flex justify-between items-center px-2 w-28 h-7 border-[3px] border-slate-300">
                      <a className="text-lg">
                        <AiOutlineMinus />
                      </a>
                      <p className="font-bold">{item.quantity}</p>
                      <a className="text-lg">
                        <AiOutlinePlus />
                      </a>
                    </div>
                  </div>
                  <div className="absolute right-3 top-2 flex flex-col gap-8 items-center">
                    <span className="text-sm">
                      <RxCross1 strokeWidth={2} />
                    </span>
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : null;
        })}
      </section>
    </>
  );
};

export default CartItems;

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useAppSelector } from "../hooks";
import React from "react";
import {
  addCartItem,
  cartItemsSelector,
  removeCartItem,
} from "../store/cartItemsSlice";
import { useAppDispatch } from "../hooks";
import {
  decrementByNumber,
  decrementCart,
  incrementCart,
} from "../store/cartSlice";

const CartItems = () => {
  const cartItemDetails = useAppSelector(cartItemsSelector);
  const dispatch = useAppDispatch();

  const handleCartItemDecrement = (title: string, size: string | number) => {
    dispatch(removeCartItem({ title, size, removeAll: false }));
    dispatch(decrementCart());
  };

  const handleCartItemIncrement = (title: string, size: string | number) => {
    dispatch(addCartItem({ title, size }));
    dispatch(incrementCart());
  };

  const handleRemoveCartItem = (
    title: string,
    size: string | number,
    quantity: number
  ) => {
    dispatch(removeCartItem({ title, size, removeAll: true }));
    dispatch(decrementByNumber(quantity));
  };

  return (
    <>
      <section className="flex flex-col items-center">
        {cartItemDetails.map((item, index) => {
          const { title, size, imgUrl, price, quantity } = item;
          return index === 0 || item !== cartItemDetails[index - 1] ? (
            <React.Fragment key={String(title) + String(size)}>
              <div className="flex items-center w-11/12 mt-6 gap-4 font-outfit relative border-b border-slate-400 pb-3">
                <div>
                  <img
                    className="h-16 border-2 border-slate-900"
                    src={imgUrl}
                    alt={title}
                  />
                </div>
                <div className="flex">
                  <div>
                    <h2 className="font-bold tracking-wide">{title}</h2>
                    <h3 className="">Size : {size}</h3>
                    <div className="mt-1 flex justify-between items-center px-2 w-28 h-7 border-[3px] border-slate-300">
                      <a
                        className="text-lg"
                        onClick={() => {
                          handleCartItemDecrement(title, size);
                        }}
                      >
                        <AiOutlineMinus />
                      </a>
                      <p className="font-bold">{quantity}</p>
                      <a
                        className="text-lg"
                        onClick={() => {
                          handleCartItemIncrement(title, size);
                        }}
                      >
                        <AiOutlinePlus />
                      </a>
                    </div>
                  </div>
                  <div className="absolute right-3 top-2 flex flex-col gap-8 items-center">
                    <span
                      className="text-sm"
                      onClick={() => {
                        quantity
                          ? handleRemoveCartItem(title, size, quantity)
                          : null;
                      }}
                    >
                      <RxCross1 strokeWidth={2} />
                    </span>
                    <p>{price}</p>
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

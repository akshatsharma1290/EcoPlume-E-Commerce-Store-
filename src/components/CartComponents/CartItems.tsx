import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useAppSelector } from "../../store/hooks";
import React from "react";
import {
  addCartItem,
  cartItemsSelector,
  removeCartItem,
} from "../../store/slices/cartItemsSlice";
import { useAppDispatch } from "../../store/hooks";
import { setProductItems } from "../../store/slices/productSlice";
import { hideCart } from "../../store/slices/cartPageTransform";
import toTitleCase from "../../utilities/SmallFunctions/titleCase";

const CartItems = () => {
  const cartItemDetails = useAppSelector(cartItemsSelector);
  const dispatch = useAppDispatch();

  const handleCartItemDecrement = (title: string, size: string | number) => {
    dispatch(removeCartItem({ title, size, removeAll: false }));
  };

  const handleCartItemIncrement = (title: string, size: string | number) => {
    dispatch(addCartItem({ title, size }));
  };

  const handleRemoveCartItem = (title: string, size: string | number) => {
    dispatch(removeCartItem({ title, size, removeAll: true }));
  };

  return (
    <>
      <section className="flex flex-col items-center text-lg">
        {cartItemDetails.map((item, index) => {
          const { title, size, Imgurl, price, quantity, product, category } =
            item;
          return index === 0 || item !== cartItemDetails[index - 1] ? (
            <React.Fragment key={String(title) + String(size)}>
              <section className="flex items-center w-11/12 mt-6 gap-4 font-outfit relative border-b border-slate-400 pb-3">
                <div>
                  <img
                    className="h-16 border-2 border-slate-900"
                    src={Imgurl}
                    alt={title}
                  />
                </div>
                <div className="flex">
                  <div>
                    {category && product && price && Imgurl ? (
                      <Link
                        onClick={() => {
                          dispatch(
                            setProductItems({ Imgurl, product, title, price })
                          );
                          dispatch(hideCart());
                        }}
                        to={`/products/${title}?category=${category}`}
                        className="underline font-bold tracking-wide"
                      >
                        {`${toTitleCase(category)} ${title}`}
                      </Link>
                    ) : null}
                    <h3 className="">Size : {size}</h3>
                    <div className="mt-1 flex justify-between items-center px-2 w-28 h-7 border-[3px] border-slate-300">
                      <a
                        className="text-lg cursor-pointer"
                        onClick={() => {
                          handleCartItemDecrement(title, size);
                        }}
                      >
                        <AiOutlineMinus />
                      </a>
                      <p className="font-bold">{quantity}</p>
                      <a
                        className="text-lg cursor-pointer"
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
                      className="text-sm cursor-pointer"
                      onClick={() => {
                        quantity ? handleRemoveCartItem(title, size) : null;
                      }}
                    >
                      <RxCross1 strokeWidth={2} />
                    </span>
                    <p>{price}</p>
                  </div>
                </div>
              </section>
            </React.Fragment>
          ) : null;
        })}
      </section>
    </>
  );
};

export default CartItems;

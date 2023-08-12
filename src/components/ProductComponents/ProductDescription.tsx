import { useAppSelector } from "../../store/hooks";
import { checkoutPriceSelector } from "../../store/slices/checkoutPriceSlice";
import generateRating from "../../utilities/RandomGenerators/generateRating";
import toTitleCase from "../../utilities/SmallFunctions/titleCase";

type ProductDescriptionProps = {
  category: string;
  title: string;
  Imgurl: string;
  price: string;
};

const ProductDescription = ({
  category,
  title,
  Imgurl,
  price,
}: ProductDescriptionProps) => {
  const checkoutPrice = useAppSelector(checkoutPriceSelector);
  const priceValue = Number(price.slice(1));
  const freeShippingPrice = 75;

  return (
    <>
      <div className="font-outfit flex justify-between items-center px-5 mt-3 text-xl">
        <h1 className="font-bold">{`${toTitleCase(category)}'s ${title}`}</h1>
        <h2>{price}</h2>
      </div>
      <div className="font-outfit flex justify-between items-center gap-2 px-5 mt-2">
        {generateRating()}
        {priceValue > freeShippingPrice || checkoutPrice > freeShippingPrice ? (
          <span className="tag font-archivo uppercase bg-slate-200 px-2 py-1 text-sm tracking-wide rounded-sm dark:bg-white dark:text-black dark:font-bold">
            Free Shipping
          </span>
        ) : null}
      </div>
      <div className="mt-5 md:flex md:justify-center">
        <img className="md:w-2/4" src={Imgurl} alt={title} />
      </div>
    </>
  );
};

export default ProductDescription;

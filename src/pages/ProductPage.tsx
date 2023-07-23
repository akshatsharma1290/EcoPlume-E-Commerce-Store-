import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import toTitleCase from "../utilities/titleCase";
import generatePrice from "../utilities/generatePrice";
import generateRating from "../utilities/generateRating";
import { useAppSelector } from "../hooks";
import { productImageSelector } from "../store/productImageSlice";

const ProductPage = () => {

  const shoesSizes = [5 , 6 , 7 , 8 , 9 , 10 , 11]
  const clothesSizes = ["XS" , "S" , "M", "L" , "XL" , "XXL" , "XXXL"]

  
  const productImage = useAppSelector(productImageSelector)
  
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const type = searchParams.get("type") || "";
  const product = searchParams.get("product") || "";
  const productName = searchParams.get("productName") || "";
  
  const activeSize = type === "shoes" ? shoesSizes : clothesSizes


  const productParent = `${toTitleCase(category)}'s ${toTitleCase(type)}`;
  return (
    <>
      <section className="productPreview mt-20">
        <div className="breadcrumb font-kanit text-sm flex gap-1 pl-5">
          <Link to={`/`} className="underline">
            Home
          </Link>
          <span>/</span>
          <Link to={`/collection/${productParent}`} className="underline">
            {productParent}
          </Link>
          <span>/</span>
          <Link
            to={`/collection/item/${product}?category=${category}`}
            className="underline"
          >
            {toTitleCase(product)}
          </Link>
          <span>/</span>
        </div>
        <div className="font-outfit flex justify-between items-center px-5 mt-3 text-xl">
          <h1 className="font-bold">{`${toTitleCase(
            category
          )} ${productName}`}</h1>
          <h2>{generatePrice()}</h2>
        </div>
        <div className="font-outfit flex justify-between items-center gap-2 px-5 mt-2">
          {generateRating()}
          <span className="tag font-archivo uppercase bg-slate-200 px-2 py-1 text-sm tracking-wide rounded-sm">
            Free Shipping
          </span>
        </div>
        <div className="mt-5">
          <img src={productImage} alt={productName} />
        </div>
        <div>
          <div className="mt-4 px-4 font-outfit flex flex-col">
            <p className="font-bold uppercase tracking-wide">Select Size : </p>
            <div className="flex gap-2 mt-2">
            {
              activeSize.map(item => {
                return (
                  <div className="border border-slate-900 text-lg w-1/4 h-[11vw] flex justify-center items-center" key={item}>
                    {item}
                  </div>
                )
              })
            }
            </div>
            <button className="bg-black w-[93vw] text-white h-12 mt-4 self-center">Select Size</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;

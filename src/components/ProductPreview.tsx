import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import toTitleCase from "../utilities/titleCase";
import generatePrice from "../utilities/generatePrice";
import generateRating from "../utilities/generateRating";

const ProductPreview = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const type = searchParams.get("type") || "";
  const product = searchParams.get("product") || "";
  const productName = searchParams.get("productName") || ""

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
          <div className="font-outfit flex justify-between px-5 mt-3 text-xl">
            <h1 className="font-bold">{`${toTitleCase(category)} ${productName}`}</h1>
            <h2>{generatePrice()}</h2>
          </div>
          <div className="font-outfit flex justify-between px-5 mt-3 text-xl">
            {generateRating()}
          </div>
      </section>
    </>
  );
};

export default ProductPreview;

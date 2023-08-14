import { useSearchParams } from "react-router-dom";
import toTitleCase from "../utilities/SmallFunctions/titleCase";
import { useAppSelector } from "../store/hooks";
import { productSelector } from "../store/slices/productSlice";
import { useEffect } from "react";
import Breadcrumb from "../components/ProductComponents/Breadcrumb";
import ProductDescription from "../components/ProductComponents/ProductDescription";
import SizeAndCartPanel from "../components/ProductComponents/SizeAndCartPanel";
import { loadingSelector } from "../store/slices/loadingSlice";
import Loader from "../components/Reusables/Loader";

const ProductPage = () => {
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category") || "";
  const isLoading = useAppSelector(loadingSelector);
  const productItems = useAppSelector(productSelector);
  const { Imgurl, product, title, price } = productItems;

  useEffect(() => {
    window.scroll({ top: 0 });
  }, [productItems]);

  const productCategory = `${toTitleCase(category)}'s ${toTitleCase(title)}`;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="productPreview mt-20 pb-5 transition-all duration-500 dark:bg-black dark:text-white">
            <Breadcrumb
              product={product}
              productCategory={productCategory}
              category={category}
            />
            <ProductDescription
              category={category}
              title={title}
              Imgurl={Imgurl}
              price={price}
            />
            <SizeAndCartPanel price={price} category={category} />
          </section>
        </>
      )}
    </>
  );
};

export default ProductPage;

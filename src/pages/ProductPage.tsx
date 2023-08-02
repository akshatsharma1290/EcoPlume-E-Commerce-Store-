import { useSearchParams } from "react-router-dom";
import toTitleCase from "../utilities/SmallFunctions/titleCase";
import { useAppSelector } from "../store/hooks";
import { productSelector } from "../store/slices/productSlice";
import { useEffect } from "react";
import Breadcrumb from "../components/ProductComponents/Breadcrumb";
import ProductDescription from "../components/ProductComponents/ProductDescription";
import SizeAndCartPanel from "../components/ProductComponents/SizeAndCartPanel";

const ProductPage = () => {
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  const [searchParam] = useSearchParams();
  const category = searchParam.get("category") || "";

  const productItems = useAppSelector(productSelector);
  const { url, product, title , price} = productItems;


  const productCategory = `${toTitleCase(category)}'s ${toTitleCase(title)}`;


  return (
    <>
      <section className="productPreview mt-20 pb-5">
        <Breadcrumb
          product={product}
          productCategory={productCategory}
          category={category}
        />
        <ProductDescription category={category} title={title} Imgurl={url} price={price} />
        <SizeAndCartPanel price={price}/>
      </section>
    </>
  );
};

export default ProductPage;

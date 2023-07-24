import { useSearchParams } from "react-router-dom";
import toTitleCase from "../utilities/titleCase";
import { useAppSelector } from "../hooks";
import { productSelector } from "../store/productSlice";
import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductDescription from "../components/ProductDescription";
import SizeAndCartPanel from "../components/SizeAndCartPanel";

const ProductPage = () => {
  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  const [searchParam] = useSearchParams();
  const category = searchParam.get("category") || "";

  const productItems = useAppSelector(productSelector);
  const { url, type, product, title } = productItems;


  const productCategory = `${toTitleCase(category)}'s ${toTitleCase(type)}`;

  return (
    <>
      <section className="productPreview mt-20">
        <Breadcrumb
          product={product}
          productCategory={productCategory}
          category={category}
        />
        <ProductDescription category={category} title={title} Imgurl={url} />
        <SizeAndCartPanel type={type}/>
      </section>
    </>
  );
};

export default ProductPage;

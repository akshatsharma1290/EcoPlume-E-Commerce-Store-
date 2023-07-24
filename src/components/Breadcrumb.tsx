import { Link } from "react-router-dom";
import toTitleCase from "../utilities/titleCase";

type BreadcrumbProps = {
    product : string
    productCategory : string
    category : string
}

const Breadcrumb = ({product , productCategory , category} : BreadcrumbProps) => {
  return (
    <>
      <div className="breadcrumb font-kanit text-sm flex gap-1 pl-5">
        <Link to={`/`} className="underline">
          Home
        </Link>
        <span>/</span>
        <Link to={`/collection/${productCategory}`} className="underline">
          {productCategory}
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
    </>
  );
};

export default Breadcrumb;

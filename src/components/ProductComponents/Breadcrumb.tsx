import { Link } from "react-router-dom";
import toTitleCase from "../../utilities/SmallFunctions/titleCase";
import { useAppDispatch } from "../../store/hooks";
import { setSearchQuery } from "../../store/slices/searchQuerySlice";
import { setFilters } from "../../store/slices/filterSlice";

type BreadcrumbProps = {
  product: string;
  productCategory: string;
  category: string;
};

const Breadcrumb = ({
  product,
  productCategory,
  category,
}: BreadcrumbProps) => {
  const dispatch = useAppDispatch();

  const handleProductCategoryLink = () => {
    dispatch(setSearchQuery(product));
    category === "men"
      ? dispatch(setFilters({ category: "Men" }))
      : dispatch(setFilters({ category: "Women" }));
  };
  return (
    <>
      <div className="breadcrumb font-kanit text-sm flex gap-1 pl-5 dark:tracking-wide dark:font-light">
        <Link to={`/`} className="underline">
          Home
        </Link>
        <span>/</span>
        <Link
          to={`/search`}
          className="underline"
          onClick={() => {
            handleProductCategoryLink();
          }}
        >
          {productCategory}
        </Link>
        <span>/</span>
        <Link
          to={`/search`}
          className="underline"
          onClick={() => {
            dispatch(setSearchQuery(product));
            dispatch(setFilters({ category: "" }));
          }}
        >
          {toTitleCase(product)}
        </Link>
        <span>/</span>
      </div>
    </>
  );
};

export default Breadcrumb;

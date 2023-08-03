import PaginationBoxes from "../components/SearchComponents/PaginationBoxes";
import SearchFilters from "../components/SearchComponents/SearchFilters";
import SearchForm from "../components/SearchComponents/SearchForm";
import SearchItems from "../components/SearchComponents/SearchItems";
import { useAppSelector } from "../store/hooks";
import { booleanSliceSelector } from "../store/slices/booleanSlices";
import Loader from "../components/Reusables/Loader";

const Search = () => {
  const { isDataRetrieved } = useAppSelector(booleanSliceSelector);
  return (
    <>
      {isDataRetrieved ? null : <Loader />}
      <section className="mt-24 font-outfit">
        <SearchForm />
        <SearchFilters />
        <SearchItems />
        <PaginationBoxes />
      </section>
    </>
  );
};

export default Search;

import PaginationBoxes from "../components/SearchComponents/PaginationBoxes";
import SearchFilters from "../components/SearchComponents/SearchFilters";
import SearchForm from "../components/SearchComponents/SearchForm";
import SearchItems from "../components/SearchComponents/SearchItems";
import { useAppSelector } from "../store/hooks";
import { loadingSelector } from "../store/slices/loadingSlice";
import Loader from "../components/Reusables/Loader";

const Search = () => {
  const isLoading = useAppSelector(loadingSelector);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="mt-24 text-black font-outfit dark:text-white">
            <SearchForm />
            <SearchFilters />
            <SearchItems />
            <PaginationBoxes />
          </section>
        </>
      )}
    </>
  );
};

export default Search;

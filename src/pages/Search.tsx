import PaginationBoxes from "../components/SearchComponents/PaginationBoxes";
import SearchFilters from "../components/SearchComponents/SearchFilters";
import SearchForm from "../components/SearchComponents/SearchForm";
import SearchItems from "../components/SearchComponents/SearchItems";

const Search = () => {
  return (
    <>
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

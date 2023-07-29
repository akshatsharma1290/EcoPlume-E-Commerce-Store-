import PaginationBoxes from "../components/PaginationBoxes";
import SearchFilters from "../components/SearchFilters";
import SearchForm from "../components/SearchForm";
import SearchItems from "../components/SearchItems";

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

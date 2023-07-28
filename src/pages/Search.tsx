import PaginationBoxes from "../components/PaginationBoxes"
import SearchForm from "../components/SearchForm"
import SearchItems from "../components/SearchItems"

const Search = () => {
  return (
    <>
    <section className="mt-24 font-outfit">
        <SearchForm/>
        <SearchItems/>
        <PaginationBoxes/>
    </section>
    </>
  )
}

export default Search
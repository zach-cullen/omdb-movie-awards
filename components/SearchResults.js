import SearchResultCard from './SearchResultCard'

const SearchResults = ({ movies }) => (
  <div>
    { movies.map((movie, i) => {
      return (
        <SearchResultCard key={i} movie={movie}/>
      )
    })}
  </div>
)

export default SearchResults
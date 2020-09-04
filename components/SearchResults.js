
const SearchResults = ({ movies }) => (
  <ul>
    { movies.map((movie, i) => {
      return (
        <p key={i}>
          {movie.Title}
        </p>
      )
    })}
  </ul>
)

export default SearchResults
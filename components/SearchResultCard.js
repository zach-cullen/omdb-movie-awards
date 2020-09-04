const SearchResultCard = ({ movie }) => {
  return(
    <div>
      {movie.Title + ' (' + movie.Year + ')'}
    </div>
  )
}

export default SearchResultCard
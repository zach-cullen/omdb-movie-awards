const SearchForm = ({ handleSearchChange, searchTerms }) => {
  return(
    <input 
      placeholder='Enter a movie title' 
      onChange={handleSearchChange} 
      value={searchTerms} 
    />
  )
}

export default SearchForm
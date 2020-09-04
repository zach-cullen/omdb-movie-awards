const SearchForm = ({ handleSubmit, handleSearchChange, searchTerms }) => {
  return(
    <form 
      onSubmit={handleSubmit}>
      <input 
        placeholder='Enter a movie title' 
        onChange={handleSearchChange} 
        value={searchTerms} />
      <input 
        type='submit' 
        value='Submit' 
      />
    </form>
  )
}

export default SearchForm
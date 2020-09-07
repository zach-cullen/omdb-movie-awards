import { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import Display from './typographic/Display'

const Search = ({ addNominee, nomineeIds }) => {
  const [searchTerms, setSearchTerms] = useState('')
  const [foundMovies, setFoundMovies] = useState([])

  const handleSearchChange = event => {
    setSearchTerms(event.target.value)
  }

  const getSearchResults = async () => {
    const requestUrl = process.env.OMDB_API_URL_BASE + process.env.OMDB_API_KEY + '&type=movie&s=' + searchTerms
    const results = await (await fetch(requestUrl)).json()
    // check Response boolean string provided by api returns 'True' if movie found
    if (JSON.parse(results.Response.toLowerCase())) {
      saveSearchResults(results)
    }
  }

  const saveSearchResults = results => {
    setFoundMovies(results.Search)
  }

  const clearSearchResults = () => {
    setFoundMovies(new Array)
  }

  // automatically pull search results as searchTerms change
  // wait for at least 3 chars since API otherwise responds w/ error: too many results
  useEffect(() => {
    if (searchTerms.length > 2) {
      getSearchResults()
    } else {
      clearSearchResults()
    }
  }, [searchTerms])
  
  return(
    <>
      <Display size='small'>
        Search for a Movie:
      </Display>
      <SearchForm 
        handleSearchChange={handleSearchChange}
        searchTerms={searchTerms}
      />
      <SearchResults 
        addNominee={addNominee}
        nomineeIds={nomineeIds}
        movies={foundMovies} 
      />
    </>
  )
}

export default Search
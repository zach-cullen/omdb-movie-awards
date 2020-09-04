import { useState, useEffect } from 'react'
import Head from 'next/head'
import FoundMovies from '../components/FoundMovies'
import SearchForm from '../components/SearchForm'

export default function Home() {
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


  return (
    <main>
      <h1>The Shoppies</h1>
      <h2>Movie awards for entrepreneurs</h2>
      <div>
        Search for a Movie:
        <SearchForm 
          handleSearchChange={handleSearchChange}
          searchTerms={searchTerms}
        />
      </div>
      <FoundMovies movies={foundMovies} />
      <div>
        Nominees:
      </div>
    </main>
  )
}

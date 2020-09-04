import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [searchTerms, setSearchTerms] = useState('')
  const [foundMovies, setFoundMovies] = useState([])

  const handleSearchChange = event => {
    setSearchTerms(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    getSearchResults()
  }

  const getSearchResults = async () => {
    const requestUrl = process.env.OMDB_API_URL_BASE + process.env.OMDB_API_KEY + '&s=' + searchTerms
    const results = await (await fetch(requestUrl)).json()
    // check Response boolean string provided by api returns 'True' if movie found
    if (JSON.parse(results.Response.toLowerCase())) {
      saveSearchResults(results)
    } 
  }

  const saveSearchResults = results => {
    setFoundMovies(results.Search)
  }

  const renderMovieList = () => {
    return foundMovies.map(movie => {
      return(
        <p key={movie.Title}>{movie.Title}</p>
      )
    })
  }

  return (
    <main>
      <h1>The Shoppies</h1>
      <h2>Movie awards for entrepreneurs</h2>
      <div>
        Search for a Movie:
        <form onSubmit={handleSubmit}>
          <input placeholder='Search' onChange={handleSearchChange} value={searchTerms} />
          <input type='submit' value='Submit' />
        </form>
      </div>
      <ul>
        {renderMovieList()}
      </ul>
      <div>
        Nominees:
      </div>
    </main>
  )
}

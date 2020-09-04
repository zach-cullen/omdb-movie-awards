import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [searchTerms, setSearchTerms] = useState('')
  const [searchResults, setSearchResults] = useState([])

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
    setSearchResults(results)
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
      <div>
        Nominees:
      </div>
    </main>
  )
}

import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [searchTerms, setSearchTerms] = useState('')

  const handleSearchChange = event => {
    setSearchTerms(event.target.value)
  }

  return (
    <main>
      <h1>The Shoppies</h1>
      <h2>Movie awards for entrepreneurs</h2>
      <div>
        Search for a Movie:
        <input placeholder='Search' onChange={handleSearchChange} value={searchTerms} />
      </div>
      <div>
        Nominees:
      </div>
    </main>
  )
}

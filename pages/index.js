import Head from 'next/head'
import Search from '../components/Search'

export default function Home() {
  return (
    <main>
      <h1>The Shoppies</h1>
      <h2>Movie awards for entrepreneurs</h2>
      <div>
        Nominees:
      </div>
      <Search />
    </main>
  )
}

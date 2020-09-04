import Head from 'next/head'
import CustomContainer from '../components/CustomContainer'
import Search from '../components/Search'

export default function Home() {
  return (
    <main>
      <CustomContainer maxW='1200px' pX='30px'>
        <h1>The Shoppies</h1>
        <h2>Movie awards for entrepreneurs</h2>
        <div>
          Nominees:
        </div>
        <Search />
      </CustomContainer>
    </main>
  )
}

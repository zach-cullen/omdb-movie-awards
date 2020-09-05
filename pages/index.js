import Head from 'next/head'
import CustomContainer from '../components/CustomContainer'
import Search from '../components/Search'

export default function Home() {
  return (
    <main>
      <CustomContainer maxW='1200px' pX='16px'>
        <Search />
      </CustomContainer>
    </main>
  )
}

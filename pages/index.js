import Head from 'next/head'
import CustomContainer from '../components/CustomContainer'
import Nominees from '../components/Nominees'
import Search from '../components/Search'

export default function Home() {
  return (
    <main>
      <CustomContainer maxW='1200px' pX='16px' pY='16px'>
        <Nominees />
        <Search />
      </CustomContainer>
    </main>
  )
}

import Head from 'next/head'
import CustomContainer from '../components/CustomContainer'
import Search from '../components/Search'
import Display from '../components/typographic/Display'

export default function Home() {
  return (
    <main>
      <CustomContainer maxW='1200px' pX='30px'>
        <Display size='x-large'>The Shoppies</Display>
        <Display size='large'>Movie awards for entrepreneurs</Display>
        <div>
          Nominees:
        </div>
        <Search />
      </CustomContainer>
    </main>
  )
}

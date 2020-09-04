import Head from 'next/head'
import CustomContainer from '../components/CustomContainer'
import Search from '../components/Search'
import Display from '../components/typographic/Display'
import Heading from '../components/typographic/Heading'
import SubHeading from '../components/typographic/SubHeading'

export default function Home() {
  return (
    <main>
      <CustomContainer maxW='1200px' pX='30px'>
        <Display size='x-large'>The Shoppies</Display>
        <Display size='large'>Movie awards for entrepreneurs</Display>
        <div>
          <Heading>Nominees:</Heading>
          <SubHeading>Choose up to 5</SubHeading>
        </div>
        <Search />
      </CustomContainer>
    </main>
  )
}

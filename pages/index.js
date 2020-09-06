import Head from 'next/head'
import { useState } from 'react'
import CustomContainer from '../components/CustomContainer'
import Nominees from '../components/Nominees'
import Search from '../components/Search'

export default function Home() {
  const [nominees, setNominees] = useState([])

  const addNominee = movie => {
    if (nominees.length < 5) {
      setNominees(nominees.concat(movie))
    } else {
      nomineesFull()
    }
  }

  const nomineesFull = () => {
    alert('You may only nominate 5 movies, you may remove a nominee if you wish to change your selection')
  }

  return (
    <main>
      <CustomContainer maxW='1200px' pX='16px' pY='16px'>
        <Nominees />
        <Search addNominee={addNominee} />
      </CustomContainer>
    </main>
  )
}

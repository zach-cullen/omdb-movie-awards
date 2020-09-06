import Head from 'next/head'
import { useState } from 'react'
import CustomContainer from '../components/CustomContainer'
import Nominees from '../components/Nominees'
import Search from '../components/Search'

export default function Home() {
  const [nominees, setNominees] = useState([])
  const [nomineeIds, setNomineeIds] = useState([])

  const addNominee = movie => {
    if (nomineeIds.includes(movie.imdbID)) return // prevent duplicate nominations
    if (nominees.length === 5) {
      nomineesFull()
      return
    }

    setNominees(nominees.concat(movie))
    setNomineeIds(nomineeIds.concat(movie.imdbID))
  }

  const nomineesFull = () => {
    alert('You may only nominate 5 movies, you may remove a nominee if you wish to change your selection')
  }

  return (
    <main>
      <CustomContainer maxW='1200px' pX='16px' pY='16px'>
        <Nominees 
          nominees={nominees}
          nomineeIds={nomineeIds}
        />
        <Search addNominee={addNominee} />
      </CustomContainer>
    </main>
  )
}

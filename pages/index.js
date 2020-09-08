import Head from 'next/head'
import { useState } from 'react'
import PageBackground from '../components/PageBackground'
import CustomContainer from '../components/CustomContainer'
import Nominees from '../components/Nominees'
import Search from '../components/Search'
import HomeBanner from '../components/HomeBanner'

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
    returnToPageTop()
  }

  const nomineesFull = () => {
    alert('You may only nominate 5 movies, you may remove a nominee if you wish to change your selection')
  }

  const removeNomineeById = movieId => {
    setNominees(nominees.filter(movie => movie.imdbID != movieId))
    setNomineeIds(nomineeIds.filter(id => id != movieId))
    returnToPageTop()
  }

  const returnToPageTop = () => {
    document.body.scrollTop = 0 // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE
  }

  return (
    <main>
      <PageBackground>
        <CustomContainer maxW='1200px' pX='16px' pY='16px'>
          <HomeBanner 
            nomineeCount={nominees.length}
          />
          <Nominees 
            nominees={nominees}
            nomineeIds={nomineeIds}
            removeNomineeById={removeNomineeById}
          />
          <Search 
            addNominee={addNominee} 
            nomineeIds={nomineeIds}
            removeNomineeById={removeNomineeById}
          />
        </CustomContainer>
      </PageBackground>
    </main>
  )
}

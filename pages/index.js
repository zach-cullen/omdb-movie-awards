import Head from 'next/head'
import { useState } from 'react'
import PageBackground from '../components/PageBackground'
import CustomContainer from '../components/CustomContainer'
import HomeBanner from '../components/HomeBanner'
import WelcomeMessage from '../components/WelcomeMessage'
import Nominees from '../components/Nominees'
import Search from '../components/Search'
import AlertMessage from '../components/AlertMessage'

export default function Home() {
  const [nominees, setNominees] = useState([])
  const [nomineeIds, setNomineeIds] = useState([])
  const [showAlertMessage, setShowAlertMessage] = useState(false)

  const addNominee = movie => {
    if (nomineeIds.includes(movie.imdbID)) return // prevent duplicate nominations
    if (nominees.length === 5) {
      setShowAlertMessage(true)
    }
    if (nominees.length < 5) {
      setNominees(nominees.concat(movie))
      setNomineeIds(nomineeIds.concat(movie.imdbID))
      returnToPageTop()
    }
  }

  const removeNomineeById = movieId => {
    setNominees(nominees.filter(movie => movie.imdbID != movieId))
    setNomineeIds(nomineeIds.filter(id => id != movieId))
    returnToPageTop()
  }

  const hideAlertMessage = () => {
    setShowAlertMessage(false)
  }

  const returnToPageTop = () => {
    document.body.scrollTop = 0 // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE
  }

  return (
    <main>
      <PageBackground>
        <CustomContainer maxW='1200px' pX='16px' pY='8px'>
          <AlertMessage 
            showAlertMessage={showAlertMessage}
            hideAlertMessage={hideAlertMessage}
          />
          <HomeBanner 
            nomineeCount={nominees.length}
          />
          <WelcomeMessage 
            nomineeCount={nominees.length}
          />
          <Nominees 
            nomineeCount={nominees.length}
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

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ShoppiesLogoSVG from './ShoppiesLogoSVG'
import Display from './typographic/Display'
import Body from './typographic/Body'
import SubHeading from './typographic/SubHeading'

const WelcomeContainer = styled.div`
  height: ${props => props.isLoaded ? '100%' : '0px'};
  margin: ${props => props.isLoaded ? props.theme.spacing.extraLoose : 0} auto;
  box-sizing: border-box;
  color: ${props => props.theme.colors.text.primary};
`

const LogoWrapper = styled.div`
  width: ${props => props.isLoaded ? '80px' : '40px'};
  margin: 16px auto;
  fill: ${props => props.theme.colors.brand.primary};
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: width ${props => props.isLoaded ? '0.5s' : '0.1s'}, 
    opacity ${props => props.isLoaded ? '0.5s' : '0.1s'} ease-in-out;
`

const WelcomeText = styled.div`
  width: 100%;
  text-align: center;
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: opacity ${props => props.isLoaded ? '0.5s' : '0.1s'} ease-in-out;

  .title-text {
    font-size: 28px;
    line-height: 30px;
    font-weight: 900;
    letter-spacing: 0.25em;
    margin: ${props => props.theme.spacing.baseTight} 0;
    color: ${props => props.theme.colors.brand.primary};
  }

  .title-sub {
    color: ${props => props.theme.colors.brand.primary};
    letter-spacing: 0.15em;
  }
`

const WelcomeMessage = ({ nomineeCount }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (nomineeCount === 0) {
      setIsLoaded(true)
    } else {
      setIsLoaded(false)
    }
  }, [nomineeCount])

  return(
    <WelcomeContainer
      isLoaded={isLoaded}
    >
      <LogoWrapper
        isLoaded={isLoaded}
      >
        <ShoppiesLogoSVG />
      </LogoWrapper>
      <WelcomeText
        isLoaded={isLoaded}
      >
        <div className='title-text'>
          THE SHOPPIES
        </div>
        <SubHeading className='title-sub'>
          Movie Awards for Entrepreneurs
        </SubHeading>
        <br/>
        <br/>
        <Display size='small'>
          Nominate up to 5 of your favorite movies.
        </Display>
      </WelcomeText>
    </WelcomeContainer>
  )
}

export default WelcomeMessage
import styled from 'styled-components'
import ShoppiesLogoSVG from './ShoppiesLogoSVG'
import Display from './typographic/Display'
import Body from './typographic/Body'
import SubHeading from './typographic/SubHeading'

const WelcomeContainer = styled.div`
  margin: ${props => props.theme.spacing.extraLoose} auto;
  box-sizing: border-box;
  color: ${props => props.theme.colors.text.primary};
`

const LogoWrapper = styled.div`
  width: 80px;
  margin: 16px auto;
  fill: ${props => props.theme.colors.text.primary};
`

const WelcomeText = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  .title-text {
    font-size: 24px;
    line-height: 30px;
    font-weight: 900;
    letter-spacing: 0.25em;
    margin: 8px 0;
  }
`

const WelcomeMessage = () => {
  return(
    <WelcomeContainer>
      <LogoWrapper>
        <ShoppiesLogoSVG />
      </LogoWrapper>
      <WelcomeText>
        <div className='title-text'>
          THE SHOPPIES
        </div>
        <SubHeading>
          Movie Awards for Entrepreneurs
        </SubHeading>
        <br />
        <Display size='small'>
          Nominate up to 5 of your favorite movies.
        </Display>
      </WelcomeText>
    </WelcomeContainer>
  )
}

export default WelcomeMessage
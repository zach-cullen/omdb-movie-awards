import styled from 'styled-components'
import ShoppiesLogoSVG from './ShoppiesLogoSVG'
import Display from './typographic/Display'

const WelcomeContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: ${props => props.theme.spacing.loose} 0;
`

const LogoText = styled.div`
  float: left;
  display: block;
  padding-top: 4px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${props => props.theme.colors.brand.primary};

  .small-text {
    font-size: 12px;
    font-weight: 400;
  }
`

const LogoWrapper = styled.div`
  float: left;
  width: 28px;
  height: 40px;
  fill: ${props => props.theme.colors.brand.primary};
`

const NomineeCounter = styled.div`
  display: block;
  float: right;
`

const CounterText = styled.div`
  float: left;
  display: block;
  font-size: 16px;
  line-height: 40px;
  margin-left: 8px;
  color: ${props => props.theme.colors.brand.primary};
`

const HomeBanner = ({ nomineeCount }) => {
  return(
    <WelcomeContainer>
      <LogoText>
        <span className='small-text'>THE</span> SHOPPIES 
        <br />
        AWARDS <span className='small-text'>2020</span>
      </LogoText>
      <NomineeCounter>
        <LogoWrapper>
          <ShoppiesLogoSVG fill='inherit' />
        </LogoWrapper>
        <CounterText>
          {nomineeCount} / 5
        </CounterText>
      </NomineeCounter>
    </WelcomeContainer>
  )
}

export default HomeBanner
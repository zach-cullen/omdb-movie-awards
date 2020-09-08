import styled from 'styled-components'
import ShoppiesLogoSVG from './ShoppiesLogoSVG'

const WelcomeContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: ${props => props.theme.spacing.loose} 0;
`

const LogoWrapper = styled.div`
  display: block;
  float: right;
  margin: 0 auto;
  width: 28px;
  fill: ${props => props.theme.colors.brand.primary};
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

const HomeBanner = () => {
  return(
    <WelcomeContainer>
      <LogoText>
        <span className='small-text'>THE</span> SHOPPIES 
        <br />
        AWARDS <span className='small-text'>2020</span>
      </LogoText>
      <LogoWrapper>
        <ShoppiesLogoSVG fill='inherit' />
      </LogoWrapper>
    </WelcomeContainer>
  )
}

export default HomeBanner
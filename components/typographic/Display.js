import styled from 'styled-components'

const XLargeDisplay = styled.h1`
  font-size: 42px;
  line-height: 44px;
  font-weight: 500;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
  }
`

const LargeDisplay = styled.h2`
  font-size: 28px;
  line-height: 32px;
  font-weight: 500;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
  }
`

const MediumDisplay = styled.h3`
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 21px;
    line-height: 28px;
    font-weight: 400;
  }
`

const SmallDisplay = styled.h4`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`

const Display = (props) => {
  switch(props.size) {
    case 'x-large':
      console.log('inside xl')
      return(
        <XLargeDisplay>
          {props.children}
        </XLargeDisplay>
      )
    case 'large':
      console.log('inside lrg')
      return(
        <LargeDisplay>
          {props.children}
        </LargeDisplay>
      )
    case 'medium':
      return(
        <MediumDisplay>
          {props.children}
        </MediumDisplay>
      )
    case 'small':
      return(
        <SmallDisplay>
          {props.children}
        </SmallDisplay>
      )
    default:
      return(
        <LargeDisplay>
          {props.children}
        </LargeDisplay>
      )
  }
}

export default Display
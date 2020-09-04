import styled from 'styled-components'

const Body = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;;
  }
`

export default Body
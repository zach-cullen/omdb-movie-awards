import styled from 'styled-components'

const Heading = styled.h5`
font-size: 16px;
line-height: 24px;
font-weight: 500;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 17px;
    line-height: 24px;
    font-weight: 500;
  }
`

export default Heading


import styled from 'styled-components'

const SubHeading = styled.h5`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }
`

export default SubHeading
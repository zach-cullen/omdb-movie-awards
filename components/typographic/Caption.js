import styled from 'styled-components'

const Caption = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
  }
`

export default Caption
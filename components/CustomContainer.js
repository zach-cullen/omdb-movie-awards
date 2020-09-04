import styled from 'styled-components'

const CustomContainer = styled.div`
  width: 100%;
  max-width: ${props => props.maxW};
  box-sizing: border-box;
  padding: ${props => props.pY ? props.pY : 0} ${props => props.pX ? props.pX : 0};
  margin: 0 auto;
`

export default CustomContainer
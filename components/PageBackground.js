import styled from 'styled-components'

const PageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(circle at 50% -20%, ${props => props.theme.colors.bg.secondary} 0%, transparent 50%);
`

export default PageBackground


import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    transition: all 0.5s;
  }
`

export default GlobalStyles
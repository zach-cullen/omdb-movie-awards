import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  body {
    background-color: ${({theme}) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    transition: background-color 0.5s, color 0.5s;
  }
`

export default GlobalStyles
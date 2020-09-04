import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import { lightTheme, darkTheme } from '../themes/themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

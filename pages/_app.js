import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import { theme } from '../themes/themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

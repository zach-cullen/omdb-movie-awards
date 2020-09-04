import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    /* Load system fonts */
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
      Roboto, Helvetica Neue, sans-serif;

    /* Make type rendering look crisper */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Disable auto-enlargement of small text in Safari */
    text-size-adjust: 100%;

    /* Enable kerning and optional ligatures */
    text-rendering: optimizeLegibility;
  }

  /**
  * Form elements render using OS defaults,
  * so font-family inheritance must be specifically declared
  */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }

  body {
    background-color: ${props => props.theme.colors.bg.primary};
    color: ${props => props.theme.colors.text.primary};
    transition: background-color 0.5s, color 0.5s;
  }

  input {
    border: none;
    outline: none;
    color: inherit;
  }
`

export default GlobalStyles
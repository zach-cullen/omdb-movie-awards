const breakpoints = {
  mobile: '720px'
}

export const lightTheme = {
  breakpoints: {
    ...breakpoints
  },
  colors: {
    bg: {
      primary: '#fff',
      secondary: '#dedede'
    },
    text: {
      primary: '#262626',
      secondary: '#404040'
    }
  }
}

export const darkTheme = {
  breakpoints: {
    ...breakpoints
  },
  colors: {
    bg: {
      primary: '#262626',
      secondary: '#404040'
    },
    text: {
      primary: '#e6e6e6',
      secondary: '#dedede'
    }
  }
}
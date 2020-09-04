const breakpoints = {
  mobile: '720px'
}

const spacing = {
  extraTight: '4px',
  tight: '8px',
  baseTight: '12px',
  base: '16px',
  loose: '20px',
  extraLoose: '24px',
}

export const lightTheme = {
  breakpoints: {
    ...breakpoints
  },
  spacing: {
    ...spacing
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
  spacing: {
    ...spacing
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
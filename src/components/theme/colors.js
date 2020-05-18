const white = '#ffffff'
const backgroundGray = '#F1F1F3'
const tabBorderGray = '#C1C1C1'
const black = '#111116'
const pitchBlack = '#000000'

const logoGray = '#424242'
const logoGreen = '#1be58d'

const googleBlue = '#176bef'

const gray = {
  500: '#373737', // N50
  600: '#707073', // N60
  650: 'rgba(32, 32, 32, 0.5)', // N65
  700: '#B5B5B9', // N70
  850: '#D3D3D7', // N85
  900: '#E1E1E6', // N90
  950: '#EEEEF3', // N95
}

const purple = {
  400: '#F2E3FF', //light Purple
  500: '#C385F8', //purple
  600: '#9013FE', //dark Purple
}

const blue = {
  400: '#DAEAFD', //light Blue
  500: '#A0C7F4', //blue
  600: '#4A90E2', //dark Blue
  700: '#294FA1', //extraDarkBlue
  800: '#044297', //deepBlue
}

const green = {
  200: '#d9f5e8', //extraLightGreen
  300: '#e8fbf3', // lighter green
  400: '#8BFFCC', // light green
  500: '#1be58d', // green
  600: '#06B86B', // dark green
}

const red = {
  400: '#FFDFE4', // light red
  500: '#E62747', // red
  600: '#C21935', // dark red
}

const orange = {
  300: '#FCEBD3', // lighter orange
  400: '#F29C21', // light orange
}

export const colors = {
  /* Custom Colors not Used by Material UI Components but Available to Styled Components and
  components loaded with Materials UI's withStyles function  */
  // misc white to black
  white,
  backgroundGray,
  tabBorderGray,
  black,
  logoGreen,
  logoGray,
  gold: '#f29b21',
  googleBlue,
  // colors
  extraLightGreen: green[200],
  lighterGreen: green[300],
  lightGreen: green[400],
  darkGreen: green[600],
  green: green[500],
  lightBlue: blue[400],
  blue: blue[500],
  darkBlue: blue[600],
  extraDarkBlue: blue[700],
  deepBlue: blue[800],
  lightPurple: purple[400],
  purple: purple[500],
  darkPurple: purple[600],
  lightRed: red[400],
  red: red[500],
  darkRed: red[600],
  lighterOrange: orange[300],
  lightOrange: orange[400],
  // neutrals/grays
  n50: gray[500],
  n60: gray[600],
  n65: gray[650],
  n70: gray[700],
  n85: gray[850],
  n90: gray[900],
  n95: gray[950],
  lighterBackGray: '#F5F5FA',
}

/* Colors that will be applied to Material's theme though its palette  */
export const palette = {
  primary: {
    light: gray[600],
    main: colors.black,
    dark: pitchBlack,
    contrastText: white,
  },
  secondary: {
    light: green[400],
    main: green[500],
    dark: green[600],
    contrastText: colors.black,
  },
  text: {
    primary: colors.black,
  },
}

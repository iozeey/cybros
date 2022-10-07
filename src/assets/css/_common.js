const getCommonStyles = (theme) => ({
  sectionContainer:{
    padding: theme.spacing(10, 0, 10),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  sectionTitle: {
    fontFamily: 'vester-medium',
    zIndex: '10',
    position: 'relative',
    textShadow: '1px 1px 14px white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  sectionDescription:{
    zIndex: '10',
    position: 'relative',
    fontFamily: "monospace",
    [theme.breakpoints.down('sm')]: {
      fontSize: '.8rem',
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
      textAlign: 'justify',
    },
  }
});

export default getCommonStyles;

import { makeStyles } from '@material-ui/core/styles';
import getCommonStyles from './_common';

const usePortfolioStyles = makeStyles((theme) => ({
  ...getCommonStyles(theme),
  sectionTitle:{
    ...getCommonStyles(theme).sectionTitle,
    color: 'white',
    textShadow: 'none',
  },
  sectionDescription:{
    ...getCommonStyles(theme).sectionTitle,
    color: 'white',
    textShadow: 'none',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    backgroundColor: '#FB9E33',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: theme.palette.text.primary,
    // backgroundImage: "linear-gradient(0deg, #fff 0%, #16506C 100%)",
    backgroundImage: 'linear-gradient(to left,#091930 10%,#132C40 99%)',
    // borderRadius: '10%',
    // marginTop: '-30px',
    ...getCommonStyles(theme).sectionContainer,
  },
  portfolioContent: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8, 8),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  portfolioItem: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
  },
  media: {
    backgroundSize: 'contain',
  },
}));
export default usePortfolioStyles;

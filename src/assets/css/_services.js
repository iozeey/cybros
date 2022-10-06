import { makeStyles } from "@material-ui/core/styles";
import getCommonStyles from './_common';

const useServicesStyles = makeStyles((theme) => ({
  ...getCommonStyles(theme),
  root: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: 'linear-gradient(0deg, #fff 10%, #6dd5ed 100%)',
    ...getCommonStyles(theme).sectionContainer,
    // padding: theme.spacing(23, 0, 10),
  },
  serviceContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2, 0),
    },
    padding: theme.spacing(8, 4, 0),
    margin: "50px auto 0",
    position: "relative",
    width:" 95%",
    borderRadius: "10px",
  },
  serviceContent: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8, 8),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  serviceTitle: {
    backgroundImage: "linear-gradient(to left,#175370 10%,#091930 99%);",
    color: theme.palette.background.paper,
  },
  media: {
    height: 0,
    paddingTop: "42.25%", // 16:9
  },
}));
export default useServicesStyles;

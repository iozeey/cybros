import { makeStyles } from "@material-ui/core/styles";
import banner from "../img/orange-banner.png";

const usePortfolioStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    // backgroundColor: "#FB9E33",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: theme.palette.background.paper,
    padding: theme.spacing(10, 0),
    // margin: theme.spacing(0, "auto"),
    // width: "95%",
  },
  postContent: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8, 8),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  mainTitle: {
    fontFamily: "vester-medium",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "1.5",
      borderBottom: "1px dashed #fff",
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  description: {
    fontFamily: "monospace",
  },
  portfolioItem: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
    },
  },
  media: {
    height: 0,
    backgroundSize: "contain",
    paddingTop: "36.25%", // 16:9
  },
}));
export default usePortfolioStyles;

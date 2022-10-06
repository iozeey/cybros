import { makeStyles } from "@material-ui/core/styles";

const useBannerStyles = makeStyles((theme) => ({
  mainBanner: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    paddingTop: theme.spacing(10),
    backgroundImage: `url(${require("../img/tech.jpeg")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: 0,
  },
  textContainer: {
    position: "relative",
    fontFamily: "vester-light",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(12),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    fontFamily: "vester-poster",
    textShadow: '-1px 1px 2px #000, 1px 1px 5px #000, 1px -1px 0 #000, -1px -1px 0 #000',
    [theme.breakpoints.down("sm")]: {
      fontSize: '2rem',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  subTitle: {
    fontFamily: "vester-poster",
    textShadow: '-1px 1px 2px #000, 1px 1px 5px #000, 1px -1px 0 #000, -1px -1px 0 #000',
    [theme.breakpoints.down("sm")]: {
      fontSize: '2rem',
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  reason: {
    color: "#4df4bc",
    fontFamily: "vester-poster",
    textShadow: '-1px 1px 2px #000, 1px 1px 5px #000, 1px -1px 0 #000, -1px -1px 0 #000',
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.4rem',
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));
export default useBannerStyles;

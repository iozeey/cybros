import { makeStyles } from "@material-ui/core/styles";

const useBannerStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    // marginBottom: theme.spacing(6),
    paddingTop: theme.spacing(10),
    backgroundImage: `url(${require("../img/bnr1.jpg")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
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
    [theme.breakpoints.down("sm")]: {
      fontSize: '2rem',
      borderBottom: "1px dashed #fff",
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));
export default useBannerStyles;

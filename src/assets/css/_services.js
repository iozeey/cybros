import { makeStyles } from "@material-ui/core/styles";

const useServicesStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${require("assets/img/AdobeStock_298681782.jpeg")})`,
    // backgroundImage: "linear-gradient(to left,#60AFFF 10%,#301140 99%)",
    // backgroundImage: "linear-gradient(to left,#598797 10%,#132C40 99%)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: theme.spacing(10, 0),
    color: theme.palette.background.paper,
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
  title: {
    flex: 1,
    fontFamily: "vester-medium",
  },
  description: {
    fontFamily: "monospace",
  },
  titleBg: {
    backgroundImage: "linear-gradient(to left,#175370 10%,#091930 99%);",
    color: theme.palette.background.paper,
  },
  media: {
    height: 0,
    paddingTop: "42.25%", // 16:9
  },
}));
export default useServicesStyles;

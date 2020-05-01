import { makeStyles } from "@material-ui/core/styles";
import banner from "../img/orange-banner.png";

const usePortfolioStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#FB9E33",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  },
  postContent: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8, 8),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },  
  title: {
    fontFamily: "vester-medium",
  },
  description:{
    fontFamily: "monospace",
  }
}));
export default usePortfolioStyles;
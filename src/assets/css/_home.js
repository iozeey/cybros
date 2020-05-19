import { makeStyles } from "@material-ui/core/styles";

const useHomeStyles = makeStyles((theme) => ({
  Home: {
    backgroundColor: theme.palette.background.paper,
  },
  postContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2, 0),
    },
    padding: theme.spacing(8, 4, 0),
    // padding: "80px 50px 0px",
    backgroundImage: "linear-gradient(0deg, #16506C 0%, #fff 100%)",
    margin: "-50px auto 0",
    position: "relative",
    width:" 95%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  postContent: {
    // backgroundImage: "linear-gradient(to left,#60AFFF 10%,#4EF4BD 99%)",
    
    fontFamily: "monospace",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));
export default useHomeStyles;

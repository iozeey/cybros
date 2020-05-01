import { makeStyles } from "@material-ui/core/styles";

const useHomeStyles = makeStyles((theme) => ({
  Home: {
    backgroundColor: theme.palette.background.paper,
  },
  postContent: {
    backgroundImage: "linear-gradient(to left,#60AFFF 10%,#4EF4BD 99%)",
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

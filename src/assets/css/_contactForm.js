import { makeStyles } from "@material-ui/core/styles";

const useContactFormStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0),
    },
  },
  rootButton: {
    color: theme.palette.background.paper,
    backgroundImage: "linear-gradient(to left,#175370 10%,#091930 99%);",
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: '0 30px',
  },
}));
export default useContactFormStyles;

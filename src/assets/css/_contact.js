import { makeStyles } from "@material-ui/core/styles";
import getCommonStyles from "./_common";

const useContactStyles = makeStyles((theme) => ({
  ...getCommonStyles(theme),
  root: {
    marginBottom: theme.spacing(0),
    position: "relative",
  },
  contactRight: {
    position: "relative",
    "& .content-bg": {
      [theme.breakpoints.up("md")]: {
      width: "100%",
      padding: theme.spacing(12, 0),
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 0),
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(6),
      },
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "50%",
    },
  },
  contactLeft: {
    position: "relative",
    "& .content-bg": {
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(8, 0),
        marginRight: "-40px",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6),
      },
      position: "relative",
    },
    "& .content-inner": {
      position: "relative",
      zIndex: 5,
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(6, 12),
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 0),
      },
    },
  },
}));
export default useContactStyles;

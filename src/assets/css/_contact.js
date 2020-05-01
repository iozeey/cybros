import { makeStyles } from "@material-ui/core/styles";

const useContactStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to left,#25a8c4 10%,#25a8c4 99%)",
    marginBottom: theme.spacing(0),
    padding: theme.spacing(0, 0),
    color: theme.palette.background.paper,
    position: "relative",
  },
  contactRight: {
    position: "relative",
    "& .content-bg": {
      [theme.breakpoints.up("md")]: {
      width: "100%",
      borderTopLeftRadius: "8px",
      padding: theme.spacing(12, 0),
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(4),
      },
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "50%",
      backgroundImage: `url(${require("assets/img/papers-wallpaper.jpg")})`,
    },
    "& .content-bg::before": {
      opacity: "0.6",
    },
  },
  contactLeft: {
    position: "relative",
    "& .content-bg": {
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(12, 0),
        marginRight: "-40px",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(4),
      },
      zIndex: 2,
      position: "relative",
      backgroundImage: "linear-gradient(to left,#F08D32 10%,#EE0C10 99%)",
    },
    "& .content-bg::before": {
      content: `''`,
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      zIndex: 1,
      opacity: 0.5,
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: `url(${require("assets/img/orange-banner.png")})`,
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
  title: {
    fontFamily: "vester-medium",
    [theme.breakpoints.down("xs")]: {
      fontSize: '2rem',
    },
  },
  description: {
    fontFamily: "monospace",
  },
}));
export default useContactStyles;

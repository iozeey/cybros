import { makeStyles } from "@material-ui/core/styles";

const useServicesStyles = makeStyles((theme) => ({
    root: {
      backgroundImage:  `url(${require("assets/img/AdobeStock_298681782.jpeg")})`,
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
    title: {
      fontFamily: "vester-medium",
    },
    description:{
      fontFamily: "monospace",
    }
  }));
  export default useServicesStyles;
  
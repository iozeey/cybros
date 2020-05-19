import { makeStyles } from "@material-ui/core/styles";

const useAboutUsStyles = makeStyles((theme) => ({
  root: {
    // backgroundImage: "linear-gradient(to left,#25a8c4 10%,#25a8c4 99%)",
    padding: theme.spacing(8, 0, 0),
  },
  borderRadius: {
    borderRadius: "10px",
  },
  title: {
    fontFamily: "vester-medium",
    [theme.breakpoints.down("sm")]: {
      fontSize: '2rem',
      borderBottom: "1px dashed #fff",
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  description: {
    fontFamily: "monospace",
  },
}));
export default useAboutUsStyles;

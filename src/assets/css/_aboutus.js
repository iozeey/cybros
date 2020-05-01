import { makeStyles } from "@material-ui/core/styles";

const useAboutUsStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to left,#25a8c4 10%,#25a8c4 99%)",
    padding: theme.spacing(8, 0, 0),
  },
  title: {
    fontFamily: "vester-medium",
  },
  description: {
    fontFamily: "monospace",
  },
}));
export default useAboutUsStyles;

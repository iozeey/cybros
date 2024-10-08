import { makeStyles } from "@material-ui/core/styles";

const useHeaderStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "transparent",
    backgroundImage: "linear-gradient(to left,#091930 10%,#132C40 99%)",
  },
  root: {
    padding: theme.spacing(0),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarLogo: {
    flex: 1,
    display: "flex",
    padding: theme.spacing(1, 0,1,0),
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    },
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    flex: 1,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontSize: "1rem",
    fontWeight: "700",
    fontFamily: "monospace",
  },
}));
export default useHeaderStyles;

import { makeStyles } from "@material-ui/core/styles";

const useContactFormStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 12),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 0),
    },
  },
  rootButton: {
    background: 'linear-gradient(to left,#EE8E31 10%,#EF3F1E 99%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  rootTextField: {
    "& label ": {
      color: theme.palette.background.paper,
    },
    "& label.Mui-focused": {
      color: theme.palette.background.paper,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.background.paper,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.background.paper,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.background.paper,
      },
    },
  },
}));
export default useContactFormStyles;

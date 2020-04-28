import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            placeholder="Email Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            defaultValue="Default Value"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth size="large">
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

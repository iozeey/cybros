import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useContactFormStyles from "../../assets/css/_contactForm"
 
export default function ContactForm() {
  const classes = useContactFormStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic1"
            label="Email Address"
            variant="outlined"
            placeholder="Email Address"
            fullWidth
            className={classes.rootTextField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic2"
            label="Full Name"
            variant="outlined"
            fullWidth
            className={classes.rootTextField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic3"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            className={classes.rootTextField}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth size="large" className={classes.rootButton}>
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

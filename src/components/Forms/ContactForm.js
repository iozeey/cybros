import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useContactFormStyles from '../../assets/css/_contactForm';

export default function ContactForm() {
  const classes = useContactFormStyles();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [body, setBody] = useState();

  const openWindow = () => {
    const fullBody = `Hello Cybros, I'm writing this to get the quote or information about my project. 
    ${body}
    Thanks,
    Name: ${name}
    Email: ${email}
    `;
    window.open(`mailto:info@cybros.dev?subject=Quotation for my project&body=${fullBody}`);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={email}
            label="Email Address"
            variant="outlined"
            placeholder="Email Address"
            fullWidth
            InputProps={{
              className: classes.input,
            }}
            className={classes.rootTextField}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={name}
            label="Full Name"
            variant="outlined"
            fullWidth
            InputProps={{
              className: classes.input,
            }}
            className={classes.rootTextField}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={body}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            InputProps={{
              className: classes.input,
            }}
            className={classes.rootTextField}
            onChange={(e) => setBody(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth size="large" className={classes.rootButton} onClick={openWindow}>
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ContactForm from "components/Forms/ContactForm";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to left,#cccccc 10%,#301140 99%)",
    marginBottom: theme.spacing(4),
    padding: theme.spacing(8, 0),
    color: theme.palette.background.paper,
  },
  title: {
    fontFamily: "vester-medium",
  },
  description:{
    fontFamily: "monospace",
  }
}));

export default function Contact(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <div id="contact" className={classes.root}>
      <Container fixed>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={6}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4" align="left" className={classes.title}>
              {title}
            </Typography>
            <Typography component="p" align="left" className={classes.description}>
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Contact.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

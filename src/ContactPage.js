import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ContactForm from "components/Forms/ContactForm";
import useContactStyles from "./assets/css/_contact";

export default function Contact(props) {
  const classes = useContactStyles();
  const { description, title, thanks, email } = props;

  return (
    <div id="contact" className={classes.root}>
      <Container className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12} sm={12} md={6} className={classes.contactLeft}>
            <div className="content-bg">
              <div className="content-inner">
                <Typography variant="h2" align="left" className={classes.sectionTitle}>
                  {title}
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  align="left"
                  className={classes.sectionDescription}
                >
                  {description}
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  align="left"
                  className={classes.sectionDescription}
                >
                  {email}
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  align="left"
                  className={classes.sectionDescription}
                >
                  {thanks}
                </Typography>               
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.contactRight}>
            <div className="content-bg">
              <ContactForm />
            </div>
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

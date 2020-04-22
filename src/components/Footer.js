import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import logo from "../assets/img/logo.jpeg";
import Grid from "@material-ui/core/Grid";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        cybros.dev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(6),
  },
  footer: {
    backgroundImage: "linear-gradient(to left,#60AFFF 10%,#4EF4BD 99%)",
    marginBottom: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.root}>
      <div className={classes.footer}>
        <Container fixed>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="h4" align="left">
                About Cybros.
              </Typography>
              <Typography component="p" align="left">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
                sem lacinia quam venenatis as vestibulum. Sed posuere consectetur
                est at lobortis. Cras mattis consectetur purus sit amet
                fermentum.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <img src={logo} alt={title} />
      <hr />
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {description}
      </Typography>
      <Copyright />
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

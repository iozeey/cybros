import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import logo from "assets/img/logo.png";
const useStyles = makeStyles((theme) => ({
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
    fontFamily: "monospace"
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <AppBar position="fixed" className={`${classes.header} ${classes.root}`}>
      <Container fixed className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item md={6} sm={12}>
            <Toolbar className={classes.toolbar}>
              <div className={classes.toolbarLogo}>
                <img src={logo} alt={title} />
              </div>
            </Toolbar>
          </Grid>
          <Grid item md={6} sm={12}>
            <Toolbar
              component="nav"
              variant="dense"
              align="right"
              className={classes.toolbarSecondary}
            >
              {sections.map((section) => (
                <Link
                  color="inherit"
                  noWrap
                  key={section.title}
                  variant="body2"
                  href={section.url}
                  className={classes.toolbarLink}
                >
                  {section.title}
                </Link>
              ))}
            </Toolbar>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

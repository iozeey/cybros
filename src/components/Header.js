import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import logo from "../assets/img/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to left,#60AFFF 10%,#301140 99%)',
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
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.root}>
        <Container fixed>
          <Toolbar className={classes.toolbar}>
            <div className={classes.toolbarLogo}>
              <img src={logo} alt={title} />
            </div>
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
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

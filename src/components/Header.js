import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import logo from 'assets/img/cybros-logo-i.png';
import useHeaderStyles from '../assets/css/_header';

export default function Header(props) {
  const classes = useHeaderStyles();
  const { sections, title } = props;

  return (
    <AppBar position="fixed" className={`${classes.header} ${classes.root}`}>
      <Container fixed className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="center" spacing={0}>
          <Grid item md={6} sm={4} xs={12}>
            <Toolbar className={classes.toolbar}>
              <div className={classes.toolbarLogo}>
                <img src={logo} alt={title} height="40" />
              </div>
            </Toolbar>
          </Grid>
          <Grid item md={6} sm={8} xs={12}>
            <Toolbar component="nav" variant="dense" align="right" className={classes.toolbarSecondary}>
              {sections.map((section) => {
                return section.type === 'btn' ? (
                  <Button
                    color="primary"
                    key={section.title}
                    variant="contained"
                    href={section.url}
                    className={classes.toolbarLink}
                  >
                    {section.title}
                  </Button>
                ) : (
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
                );
              })}
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

import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PortfolioItem from "./components/Portfolio/PortfolioItem";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FB9E33",
    color: theme.palette.background.paper,
    padding: theme.spacing(4, 0),
  },
  my20: {
    margin: theme.spacing(3),
  },
}));

export default function Portfolio(props) {
  const classes = useStyles();
  const { title, description } = props;
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              {title}
            </Typography>
            <Typography variant="p" color="inherit" className={classes.my20} paragraph>
              {description}
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={4}>
            <PortfolioItem />
          </Grid>
          <Grid item xs={4}>
            <PortfolioItem />
          </Grid>
          <Grid item xs={4}>
            <PortfolioItem />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Portfolio.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

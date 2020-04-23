import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(0),
  },
  media: {
    height: 0,
    backgroundSize: "contain",
    paddingTop: "56.25%", // 16:9
  },
}));

export default function PortfolioItem(props) {
  const classes = useStyles();
  const { portfolioItem } = props;
  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      {portfolioItem.map((portfolio) => (
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={require("../../assets/portfolio/" + portfolio.img)}
              title={portfolio.title}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

PortfolioItem.propTypes = {
  portfolioItem: PropTypes.array,
};

import React from "react"; 
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import usePortfolioStyles from "../../assets/css/_portfolio";
 

export default function PortfolioItem(props) {
  const classes = usePortfolioStyles();
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
        <Grid item md={3} sm={6} xs={6}>
          <CardActionArea component="a" href={portfolio.link} target="_blank">
            <Card className={classes.portfolioItem}>
              <CardMedia
                className={classes.media}
                image={require("assets/portfolio/" + portfolio.img)}
                title={portfolio.title}
              />
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
}

PortfolioItem.propTypes = {
  portfolioItem: PropTypes.array,
};

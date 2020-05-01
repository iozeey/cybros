import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PortfolioItem from "./components/Portfolio/PortfolioItem";
import usePortfolioStyles from "./assets/css/_portfolio";
import { portfolioItems } from "./components/theme/dataset";

export default function Portfolio(props) {
  const classes = usePortfolioStyles();
  const { title, description } = props;
  return (
    <div id="portfolio" className={classes.root}>
      <Container fixed>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item md={12}>
            <div className={classes.postContent}>
              <Typography variant="h3" align="center" className={classes.title}>
                {title}
              </Typography>
              <Typography
                variant="p"
                color="inherit"
                paragraph
                className={classes.description}
              >
                {description}
              </Typography>
            </div>
          </Grid>
        </Grid>

        <PortfolioItem portfolioItem={portfolioItems} />
      </Container>
    </div>
  );
}

Portfolio.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

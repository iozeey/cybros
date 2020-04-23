import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PortfolioItem from "./components/Portfolio/PortfolioItem";
import banner from "./assets/img/orange-banner.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#FB9E33",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  },
  my20: {
    margin: theme.spacing(3),
  },
}));

const portfolioItems = [
  { title: "logo1", img: "p1.png" },
  { title: "logo2", img: "p4.png" },
  { title: "logo3", img: "p1.png" },
  { title: "logo4", img: "p3.png" },
  { title: "logo5", img: "p2.png" },
  { title: "logo6", img: "p5.png" },
];
export default function Portfolio(props) {
  const classes = useStyles();
  const { title, description } = props;
  return (
    <div id="portfolio" className={classes.root}>
      <Container fixed>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              {title}
            </Typography>
            <Typography
              variant="p"
              color="inherit"
              className={classes.my20}
              paragraph
            >
              {description}
            </Typography>
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

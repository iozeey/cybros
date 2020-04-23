import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Services from "components/Services/Services"
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to left,#60AFFF 10%,#301140 99%)",
    padding: theme.spacing(10, 0),
    color: theme.palette.background.paper,
  },
}));

const services = [
  { title: "Landing Page", img: "p1.png" },
  { title: "Bootstrap", img: "p4.png" },
  { title: "Wordpress", img: "p1.png" },
  { title: "ReactJS", img: "p3.png" },
];
export default function Development(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <div id="development" className={classes.root}>
      <Container fixed>
        <Grid container spacing={6} direction="row-reverse" justify="space-between" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="">
              {title}
            </Typography>
            <Typography component="p" align="">
              {description}
            </Typography>
          </Grid> 
        </Grid>
        <Services services={services} />
      </Container>
    </div>
  );
}

Development.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

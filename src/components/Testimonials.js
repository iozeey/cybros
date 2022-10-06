import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import 'assets/css/testimonial.css';
import * as React from 'react';
import useTestimonialsStyles from './../assets/css/_testimonial';

const data = [
  {
    avatar: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
    name: 'Shay Chin',
    designation: 'CTO of TechnoGeeks, LLC',
    message:
      'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  },
  {
    avatar: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg`,
    name: 'Shay Chin',
    designation: 'CTO of TechnoGeeks, LLC',
    message:
      'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  },
  {
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg',
    name: 'Shay Chin',
    designation: 'CTO of TechnoGeeks, LLC',
    message: `Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think
      faster than we speak. Hobbes: Probably so we can think twice`,
  },
  {
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg',
    name: 'Shay Chin',
    designation: 'CTO of TechnoGeeks, LLC',
    message: `Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think
      faster than we speak. Hobbes: Probably so we can think twice`,
  },
];

const Testimonials = () => {
  const classes = useTestimonialsStyles();

  return (
    <div id="testimonial" className={classes.root}>
      <Container fixed>
        <Grid
          container
          direction="row"
          spacing={2}
          justify="flex-start"
          alignItems="flex-start"
          className={classes.testimonialContainer}
        >
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className={classes.sectionTitle}>
              Some words from our Clients
            </Typography>
          </Grid>

          {data.map((item) => (
            <Grid item md={3} xs={1} sm={2}>
              <Card>
                <CardContent>
                  <figure class="testimonialCard">
                    <blockquote>{item.message}</blockquote>
                    <div class="author">
                      <img src={item.avatar} alt="sq-sample1" />
                      <h5>
                        {item.name} <span> {item.designation}</span>
                      </h5>
                    </div>
                  </figure>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonials;

import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import 'assets/css/testimonial.css';
import * as React from 'react';
import useTestimonialsStyles from './../assets/css/_testimonial';

const data = [
  {
    avatar: require('assets/people/t-1.jpg'),
    name: 'Shay Chin',
    designation: 'CTO of TechnoGeeks, LLC',
    message:
      `Cybros. Dev has the best developers. I've been using their services for several years now.`,
  },
  {
    avatar: require('assets/people/t-2.jpg'),
    name: 'Jawad Ahmad',
    designation: 'CTO of NeroTech',
    message:
      'Really professional, high quality content and a pleasure to work with. Thank you!',
  },
  {
    avatar: require('assets/people/t-3.jpeg'),
    name: 'Zoe Ma',
    designation: 'Business owner',
    message: `The Cybros. Dev team has been an extraordinary service provider and really boost my business`,
  },
  {
    avatar: require('assets/people/t-4.png'),
    name: 'Jack',
    designation: 'Business owner',
    message: `Hired them for support now I'm permanently using their services to enhance my productivity`,
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

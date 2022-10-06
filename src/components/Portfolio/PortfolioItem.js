import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from "@material-ui/core/CardActionArea";
import usePortfolioStyles from '../../assets/css/_portfolio';
// import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default function PortfolioItem(props) {
  const classes = usePortfolioStyles();
  const { portfolioItem } = props;
  // const [isOpen, setOpen] = React.useState(false);
  // const [photoIndex, setPhotoIndex] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Grid container spacing={4} direction="row" justify="space-around" alignItems="center">
      {portfolioItem.map((portfolio) => (
        <Grid item md={3} sm={6} xs={6}>
          <CardActionArea component="a" href={portfolio.link} target="_blank">
            <Card className={classes.portfolioItem}>
              <CardMedia
                component="img"
                height={90}
                className={classes.media}
                image={require('assets/portfolio/' + portfolio.logo)}
                title={portfolio.title}
                // onClick={handleOpen}
              />
            </Card>
          </CardActionArea>
          {/* {isOpen && (
            <Lightbox
              imageTitle={portfolio.title}
              mainSrc={"../../assets/portfolio/" + portfolio.images[photoIndex]}
              nextSrc={
                portfolio.images[(photoIndex + 1) % portfolio.images.length]
              }
              prevSrc={
                portfolio.images[
                  (photoIndex + portfolio.images.length - 1) %
                    portfolio.images.length
                ]
              }
              onCloseRequest={handleClose}
              onMovePrevRequest={() =>
                setPhotoIndex({
                  photoIndex:
                    (photoIndex + portfolio.images.length - 1) %
                    portfolio.images.length,
                })
              }
              onMoveNextRequest={() =>
                setPhotoIndex({
                  photoIndex: (photoIndex + 1) % portfolio.images.length,
                })
              }
            />
          )} */}
        </Grid>
      ))}
    </Grid>
  );
}

PortfolioItem.propTypes = {
  portfolioItem: PropTypes.array,
};

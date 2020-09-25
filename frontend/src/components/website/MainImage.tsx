import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainImage: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainImageContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

type Props = {
  description: string;
  image: string;
  imageText: string;
  title: string;
};

const MainImage: React.FC<Props> = ({ description, image, imageText, title }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.mainImage} style={{ backgroundImage: `url(${image})` }}>
      {/* Increase the priority of the hero background image */}
      <img style={{ display: "none" }} src={image} alt={imageText} />
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainImageContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainImage;

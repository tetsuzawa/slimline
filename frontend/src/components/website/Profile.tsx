import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

type Props = {
  image: string;
  imageText: string;
  name: string;
  text: string;
};

const containerStyle = {
  padding: "16px 0",
};

const imageStyle = {
  height: "200px",
  width: "200px",
};

const Profile: React.FC<Props> = ({ image, imageText, name, text }) => {
  return (
    <>
      <Grid container spacing={4} style={containerStyle}>
        <Grid item xs={12} md={4}>
          <img src={image} alt={imageText} style={imageStyle} />{" "}
        </Grid>
        {/*画像の大きさを調整、円で切り抜き*/}
        <Grid item justify={"flex-start"} xs={12} md={8}>
          <Typography component="h4" variant="h4" color="inherit" gutterBottom>
            {name}
          </Typography>
          <Typography component="span" variant="body1" color="inherit" paragraph>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;

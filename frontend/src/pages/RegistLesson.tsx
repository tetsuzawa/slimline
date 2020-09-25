import React from "react";
import { useEffect, useState } from "react";
import ErrorMessage from "./../components/ErrorMessage";
import { registLesson } from "../api";
import clsx from "clsx";
import useUser from "../hooks/useUser";
import "date-fns";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import firebase from "firebase/app";
import { zoomConfig } from "../../env";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "5%",
    },
    textFieldContainer: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center" as const,
    },
    textField: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    button: {
      paddingTop: "50px",
      paddingBottom: "100px",
      textAlign: "center",
    },
  })
);

const RegistLesson: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [price, setPrice] = useState("");
  const [token, setToken] = useState("");

  const { user } = useUser();
  const classes = useStyles();

  useEffect(() => {
    const f = async () => {
      if (user === null) {
        return;
      }
      const token = await user.getIdToken();
      setToken(token);
    };
    f();
  }, [user]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    const formattedStartDate = Math.floor(startDate.getTime() / 1000);
    const formattedEndDate = Math.floor(endDate.getTime() / 1000);
    const formattedPrice = Number(price);
    console.log(formattedStartDate);
    console.log(formattedEndDate);
    console.log(formattedPrice);
    const values = {
      start_time: formattedStartDate,
      end_time: formattedEndDate,
      price: formattedPrice,
    };
    const result = await registLesson(token, values)
      .then(() => {
        window.alert("新しいレッスンが登録されました。");
      })
      .catch((err) => console.log(err));
    console.log(result);
    if (result === null) {
      const firebaseUser = firebase.auth().currentUser!;
      window.location.href = `https://zoom.us/oauth/authorize?response_type=code&client_id=${
        zoomConfig.zoomClientID
      }&redirect_uri=${encodeURIComponent(zoomConfig.zoomRedirectURI)}/owner/${
        firebaseUser.uid
      }/zoom_auth`;
    }
  };

  const StartTimeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setStartTime(e.currentTarget.value);
  };

  const EndTimeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEndTime(e.currentTarget.value);
  };

  const PriceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPrice(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  return (
    <div className={classes.container}>
      <ErrorMessage message={errorMessage} />
      <h1>レッスン登録</h1>
      <form onSubmit={onSubmit} className={classes.textFieldContainer}>
        <h3>レッスン開始日時</h3>
        <TextField
          id="datetime-local"
          type="datetime-local"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={StartTimeChangeHandler}
        />
        <h3>レッスン終了日時</h3>
        <TextField
          id="datetime-local"
          type="datetime-local"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={EndTimeChangeHandler}
        />
        <h3>料金</h3>
        <FormControl className={classes.textField}>
          <Input
            id="standard-adornment-weight"
            value={price}
            className={classes.textField}
            onChange={PriceChangeHandler}
            endAdornment={<InputAdornment position="end">円</InputAdornment>}
          />
        </FormControl>
        <p className={classes.button}>
          <Button variant="contained" color="primary" type="submit">
            レッスンを登録
          </Button>
        </p>
      </form>
    </div>
  );
};

export default RegistLesson;

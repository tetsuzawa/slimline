import React from "react";
import useUser from "../hooks/useUser";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ErrorMessage from "./../components/ErrorMessage";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: "5%",
      textAlign: "center" as const,
    },
    root: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: "40ch",
      },
    },
    button: {
      paddingTop: 40,
    },
  })
);

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useUser();
  const history = useHistory();
  const classes = useStyles();

  const signinHandler = async () => {
    await login(email, password)
      .then(() => {
        history.replace("/dashboard");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const EmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value.trim());
  };

  const PwChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };

  return (
    <div className={classes.container}>
      <h1>ログイン</h1>
      <ErrorMessage message={errorMessage} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="メールアドレス"
          variant="outlined"
          onChange={EmailChangeHandler}
        />
        <TextField
          id="outlined-password-input"
          label="パスワード"
          type="password"
          variant="outlined"
          onChange={PwChangeHandler}
        />
      </form>
      <div>
        <p className={classes.button}>
          <Button variant="contained" color="primary" onClick={signinHandler}>
            ログイン
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import useUser from "../hooks/useUser";
import { createWebsite } from "../api";
import ErrorMessage from "../components/ErrorMessage";
import firebase from "firebase/app";
import { zoomConfig } from "../../env";
import {
  Button,
  Container,
  createStyles,
  CssBaseline,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import MainImage from "../components/website/MainImage";
import Header from "../components/website/Header";
import Profile from "../components/website/Profile";
import Lesson from "../components/Lesson";

interface State {
  theme: string;
  title: string;
  content: string;
  profile: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  })
);

const themes = {
  default: {
    // css
  },
  simple1: {},
  simple2: {},
};

const MakeWeb: React.FC = () => {
  const [, setMadeWeb] = useState(false);
  const [values, setValues] = useState<State>({
    theme: "default",
    title: "Hanako's Parsonal Training",
    content: "あなたに最適なフィットネスをオンラインで",
    profile:
      "山田花子。XX大学卒業後、XXXXXを経て、XXXジムでトレーナーとして働く。Instagram：@hanako",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [theme, setTheme] = useState<CSSProperties>(themes.default);
  const { user } = useUser();
  const classes = useStyles();

  const handleChange = (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firebaseUser = firebase.auth().currentUser!;
    const token = await user!.getIdToken();
    const newWebsite = await createWebsite(token, values)
      .then(() => setMadeWeb(true))
      .catch((err) => setErrorMessage(err.message));
    console.log(newWebsite);
    console.log(firebaseUser.uid);
    window.location.href = `https://zoom.us/oauth/authorize?response_type=code&client_id=${
      zoomConfig.zoomClientID
    }&redirect_uri=${encodeURIComponent(zoomConfig.zoomRedirectURI)}/owner/${
      firebaseUser.uid
    }/zoom_auth`;
  };

  const rootStyle = {
    justifyContent: "center" as const,
    display: "flex",
  };

  const containerStyle = {
    marginTop: 100,
  };

  const innerStyle = {
    display: "flex",
    flexDirection: "column" as const,
  };

  const previewGridStyle = {
    border: "1px dotted",
    borderRadius: 16,
  };

  const inputStyle = {
    marginBottom: 8,
  };

  const onChangeTheme = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    setTheme(themes[e.target.value as string]);
    handleChange("theme");
  };

  return (
    <div style={rootStyle}>
      <Container style={containerStyle}>
        {/*左側の情報入力部分*/}
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <form onSubmit={onSubmit}>
              <div style={innerStyle}>
                <h3>Webサイト作成</h3>
                <ErrorMessage message={errorMessage} />
                <InputLabel id="theme-selector">テーマ：</InputLabel>
                <Select
                  labelId="theme-selector"
                  id="select"
                  value={values.theme}
                  style={inputStyle}
                  onChange={onChangeTheme}
                >
                  {Object.keys(themes).map((key) => (
                    <MenuItem value={key} key={key}>
                      {key}
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  id="outlined-basic"
                  label="タイトル"
                  variant="outlined"
                  style={inputStyle}
                  defaultValue="Hanako's Parsonal Training"
                  onChange={handleChange("title")}
                />
                <TextField
                  id="outlined-basic"
                  label="メインテキスト"
                  variant="outlined"
                  multiline
                  style={inputStyle}
                  defaultValue="あなたに最適なフィットネスをオンラインで"
                  onChange={handleChange("content")}
                />
                {/*<TextField*/}
                {/*  id="outlined-basic"*/}
                {/*  label="名前"*/}
                {/*  variant="outlined"*/}
                {/*  multiline*/}
                {/*  style={inputStyle}*/}
                {/*  defaultValue="名前"*/}
                {/*  onChange={handleChange("name")}*/}
                {/*/>*/}
                <TextField
                  id="outlined-basic"
                  label="プロフィール"
                  variant="outlined"
                  multiline
                  style={inputStyle}
                  defaultValue="山田花子。XX大学卒業後、XXXXXを経て、XXXジムでトレーナーとして働く。Instagram：@hanako"
                  onChange={handleChange("profile")}
                />
                <p>
                  {/*画像をアップロードする欄を追加*/}
                  <Button type="submit" variant="contained" color="primary">
                    送信
                  </Button>
                </p>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} md={8} style={previewGridStyle}>
            <CssBaseline />
            <Container maxWidth="lg">
              <h3>プレビュー</h3>
              <Header title={values.title} />
              <MainImage
                // title={values.title}
                title={""}
                description={values.content}
                image="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
                imageText="main image description"
              />
              <Divider />
              <Profile
                image={
                  "https://images.unsplash.com/photo-1592592851366-4ec8bffdb30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3140&q=80"
                }
                imageText={"imageText"}
                name={"" /*TODO*/}
                text={values.profile}
              />
              <Divider />
              <Lesson
                id={1}
                owner_id={1}
                start_time={1598506200}
                end_time={1598509800}
                meeting_id={"https://zoom.us/j/9189410000?pwd=xxxxxxxxxxxxxxxxxxxxxxxxxxxx1"}
                price={3000}
              />
              <Lesson
                id={2}
                owner_id={1}
                start_time={1598513400}
                end_time={1598517000}
                meeting_id={"https://zoom.us/j/9189420000?pwd=xxxxxxxxxxxxxxxxxxxxxxxxxxxx2"}
                price={3000}
              />
              <Lesson
                id={3}
                owner_id={1}
                start_time={1598527800}
                end_time={1598532600}
                meeting_id={"https://zoom.us/j/9189430000?pwd=xxxxxxxxxxxxxxxxxxxxxxxxxxxx3"}
                price={4500}
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MakeWeb;

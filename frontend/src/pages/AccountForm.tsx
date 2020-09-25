import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import ErrorMessage from "../components/ErrorMessage";
import useUser from "../hooks/useUser";
import { createOwner } from "../api";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface State {
  first_name: string;
  last_name: string;
  postal_number: string;
  prefecture: string;
  city: string;
  address: string;
  address_optional: string;
  phone_number: string;
  email: string;
  bank_account_number: string;
  bank_branch_code: string;
  bank_code: string;
  bank_account_holder_name: string;
  bank_account_type: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },

    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      width: "60%",
    },

    name: {
      display: "flex",
      flexDirection: "row",
    },

    ownerInfo: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column" as const,
      minWidth: "300px",
      width: "80%",
    },

    bankInfo: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column" as const,
      minWidth: "300px",
      width: "80%",
    },
  })
);

const AccountForm: React.FC = () => {
  const { user } = useUser();
  const classes = useStyles();
  const [createdAccount, setCreatedAccount] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();
  const [values, setValues] = useState<State>({
    first_name: "",
    last_name: "",
    postal_number: "",
    prefecture: "",
    city: "",
    address: "",
    address_optional: "",
    phone_number: "",
    email: "",
    bank_account_number: "",
    bank_branch_code: "",
    bank_code: "",
    bank_account_holder_name: "",
    bank_account_type: "",
  });

  useEffect(() => {
    if (user === null) {
      return;
    }
    setValues({ ...values, ["email"]: user.email! });
  }, [user]);

  const handleChange = (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await user!.getIdToken();
    const owner = await createOwner(token, values)
      .then(() => {
        history.replace("/make_web");
      })
      .then(() => setCreatedAccount(true))
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (
    <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>講師登録</h1>
        <span>あなたの情報をご入力いただき、</span>
        <span>「登録」ボタンを押してください。</span>
        <ErrorMessage message={errorMessage} />
      </div>
      <div className={classes.container}>
        <div className={classes.ownerInfo}>
          <h3>個人情報</h3>
          <div className={classes.name}>
            <TextField
              id="outlined-basic"
              label="姓"
              variant="outlined"
              onChange={handleChange("last_name")}
            />
            <TextField
              id="outlined-basic"
              label="名"
              variant="outlined"
              onChange={handleChange("first_name")}
            />
          </div>
          <TextField
            id="outlined-basic"
            placeholder="1600021"
            label="郵便番号"
            variant="outlined"
            onChange={handleChange("postal_number")}
          />
          <TextField
            id="outlined-basic"
            label="都道府県"
            placeholder="東京都"
            variant="outlined"
            onChange={handleChange("prefecture")}
          />
          <TextField
            id="outlined-basic"
            label="市区町村"
            placeholder="新宿区"
            variant="outlined"
            onChange={handleChange("city")}
          />
          <TextField
            id="outlined-basic"
            label="番地"
            placeholder="歌舞伎町１丁目４−１"
            variant="outlined"
            onChange={handleChange("address")}
          />
          <TextField
            id="outlined-basic"
            label="マンション名・その他"
            variant="outlined"
            onChange={handleChange("address_optional")}
          />
          <TextField
            id="outlined-basic"
            placeholder="08011112222"
            label="電話番号"
            variant="outlined"
            onChange={handleChange("phone_number")}
          />
        </div>
        <div className={classes.bankInfo}>
          <h3>口座情報</h3>
          <TextField
            id="outlined-basic"
            label="口座登録氏名"
            variant="outlined"
            onChange={handleChange("bank_account_holder_name")}
          />
          <TextField
            id="outlined-basic"
            label="銀行コード"
            variant="outlined"
            onChange={handleChange("bank_code")}
          />
          <TextField
            id="outlined-basic"
            label="支店コード"
            variant="outlined"
            onChange={handleChange("bank_branch_code")}
          />
          <TextField
            id="outlined-basic"
            label="口座番号"
            variant="outlined"
            onChange={handleChange("bank_account_number")}
          />
          <TextField
            id="outlined-basic"
            label="口座種類"
            variant="outlined"
            onChange={handleChange("bank_account_type")}
          />
          <p style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <Button variant="contained" color="primary" type="submit">
              登録
            </Button>
          </p>
        </div>
      </div>
    </form>
  );
};

export default AccountForm;

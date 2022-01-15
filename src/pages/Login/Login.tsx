import React from "react";

import Logo from "assets/img/login-image.svg";
import { Button, TextField, makeStyles, Box, InputAdornment } from "@material-ui/core";
import axios from "plugins/axios";
import { AccountCircle, Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    maxWidth: "100%",
    background:
      "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(37, 97, 207, 1) 0%, rgba(0, 212, 255, 1) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& img": {
      height: "15rem",
      width: "100%",
      margin: "1.5rem auto 1.5rem auto",
    },
    "& h2": {
      width: "100%",
      textAlign: "center",
    },
    "& button": {
      marginTop: "1.5rem",
    },
  },
  form: {
    width: "30rem",
    margin: "auto",
    backgroundColor: "rgb(235, 235, 235)",
    padding: "4rem 1rem",
    borderRadius: "1rem",
  },
});

const Login: React.FC = () => {
  const classes = useStyles();
  const disabled = false;
  const route = useNavigate();
  const credentials = {
    email: "valdir@mail.com",
    senha: "123",
  };
  const singin = (): void => {
    axios.post("/login", credentials).then((res) => {
      localStorage.setItem("Authorization", res.headers["authorization"]);
      route("/");
    });
  };

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <h2>Help Desk - Dicas de um DEV</h2>
        <img src={Logo} alt="Help Desk - Dicas de um DEV" />
        <Box sx={{ mb: "1rem" }}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            placeholder="Ex. joãosilva@gmail.com"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          label="Password"
          placeholder="Ex.123"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Password />
              </InputAdornment>
            ),
          }}
        />

        <Button fullWidth variant="contained" color="primary" onClick={() => singin()}>
          Signin
        </Button>
      </form>
    </div>
  );
};

export default Login;

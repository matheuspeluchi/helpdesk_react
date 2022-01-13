import React from "react";

import Logo from "assets/img/login-image.svg";
import { Button, TextField, makeStyles, Box } from "@material-ui/core";
import axios from "plugins/axios";

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
  const credentials = {
    email: "valdir@mail.com",
    senha: "123",
  };
  const singin = (): void => {
    axios.post("/login", credentials).then((res) => {
      console.log(res.headers["authorization"]);
      localStorage.setItem("Authorization", res.headers["authorization"]);
      console.log(res.data);
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
          />
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          type="password"
          label="Password"
          placeholder="Ex.123"
        />

        <Button fullWidth variant="contained" color="primary" onClick={() => singin()}>
          Teste
        </Button>
      </form>
    </div>
  );
};

export default Login;

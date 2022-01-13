import React from "react";

import styles from "./styles.module.css";
import Logo from "assets/img/login-image.svg";
import { Button, TextField } from "@material-ui/core";

import axios from "plugins/axios";

const Login: React.FC = () => {
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
    <div className={`container  ${styles.hd_container}`}>
      <form className={`form-group shadow-lg ${styles.hd_form}`}>
        <h4>Help Desk - Dicas de um DEV</h4>

        <img src={Logo} alt="Help Desk - Dicas de um DEV" />

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Ex. jogaosilva@mail.com"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <TextField placeholder="Ex. joãosilva@gmail.com" />
        <Button fullWidth variant="contained" color="primary" onClick={() => singin()}>
          Teste
        </Button>
      </form>
    </div>
  );
};

export default Login;

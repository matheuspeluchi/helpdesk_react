import React from "react";

import styles from "./styles.module.css";
import Logo from "assets/img/login-image.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

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
          <input type="text" className="form-control" placeholder="Ex. jogaosilva@mail.com" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text ">
              <span>
                <FontAwesomeIcon icon={faKey} />
              </span>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Ex. 123456" />
        </div>

        <button type="button" onClick={() => singin()} disabled={disabled} className={`btn btn-primary ${styles.fullWidth}`}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

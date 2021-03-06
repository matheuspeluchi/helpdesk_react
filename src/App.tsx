import { ThemeProvider, createTheme } from "@material-ui/core";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Store from "./store";
import Tecnicos from "pages/Tecnicos/cecnicos";
import Clientes from "pages/Clientes/clientes";
import ChamadosList from "pages/Chamados/ChamadosList";

const App: React.FC = () => {
  const theme = createTheme();

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />}>
              <Route path="/chamados" element={<ChamadosList />} />
              <Route path="/tecnicos" element={<Tecnicos />} />
              <Route path="/clientes" element={<Clientes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

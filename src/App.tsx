import { ThemeProvider, createTheme } from "@material-ui/core";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Store from "./store";

const App: React.FC = () => {
  const theme = createTheme();

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

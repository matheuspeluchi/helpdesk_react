import { ThemeProvider, createTheme } from "@material-ui/core";
import Home from "pages/Home";
import Login from "pages/Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Container } from './styles';

const App: React.FC = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Box, CssBaseline } from "@mui/material";
import ApplicationBar from "components/appBar/AppBar";
import AppDrawer from "components/drawer/Drawer";
import React from "react";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ApplicationBar />
      <AppDrawer />
      <Box component="main" sx={{ flexGrow: 1, pt: 8, pl: 1, pr: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;

import { Box, CssBaseline } from "@mui/material";
import ApplicationBar from "components/appBar/AppBar";
import AppDrawer from "components/drawer/Drawer";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  const [contentHeight, setcontentHeight] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      const screenHeight = document.body.clientHeight;
      setcontentHeight(screenHeight - 75 || 400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ApplicationBar />
      <AppDrawer />
      <Box
        style={{ height: contentHeight }}
        component="main"
        sx={{ flexGrow: 1, mt: 9, pl: 1, pr: 1 }}
        id="layout-content"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;

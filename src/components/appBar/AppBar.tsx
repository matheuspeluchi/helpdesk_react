import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as appActions from "store/actions/app";

import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";
import RouterBreadcrumbs from "components/breadcrumb/breadCrumb";
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;
const drawerClosedWidth = 168;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  width: `calc(100% - ${drawerWidth - drawerClosedWidth}px)`,
  background:
    "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(37, 97, 207, 1) 0%, rgba(0, 212, 255, 1) 100%)",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    background:
      "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(37, 97, 207, 1) 0%, rgba(0, 212, 255, 1) 100%)",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const ApplicationBar = ({ drawer, toggleDrawer }: any) => {
  return (
    <AppBar position="fixed" open={drawer}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer(drawer)}
          edge="start"
          sx={{
            marginRight: "36px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <RouterBreadcrumbs />
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: any) => ({
  drawer: state.app.drawer,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(appActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationBar);

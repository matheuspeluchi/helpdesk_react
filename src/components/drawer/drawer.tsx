import * as React from "react";
import { connect } from "react-redux";

import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Logo from "assets/img/side-image.svg";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core";
import { ContactPhone, People, SupportAgent } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  background:
    "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(37, 97, 207, 1) 0%, rgba(0, 212, 255, 1) 100%)",
  color: "white",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  background:
    "linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(37, 97, 207, 1) 0%, rgba(0, 212, 255, 1) 100%)",
  color: "white",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const usestyle = makeStyles((theme: Theme) => ({
  root: (open) => ({
    height: open ? "2rem" : "1.4rem",
  }),
}));

const AppDrawer = ({ drawer }: any) => {
  const classes = usestyle(drawer);
  const menuItems = [
    { to: "/tecnicos", label: "Tecnicos", icon: ContactPhone },
    { to: "/chamados", label: "Chamados", icon: SupportAgent },
    { to: "/clientes", label: "Clientes", icon: People },
  ];

  return (
    <Drawer variant="permanent" open={drawer}>
      <DrawerHeader>
        <List>
          <ListItem>
            <ListItemIcon>
              <img src={Logo} className={classes.root} alt="Imagem de navegação" />
            </ListItemIcon>
            <ListItemText primary="HelpDesk" />
          </ListItem>
        </List>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((item, index) =>
          item.label !== "Divider" ? (
            <ListItem component={Link} to={item.to} button key={item.label} sx={{ color: "white" }}>
              <ListItemIcon style={{ color: "white" }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ) : (
            <Divider />
          )
        )}
      </List>
    </Drawer>
  );
};

export default connect((state: any) => ({ drawer: state.app.drawer }))(AppDrawer);

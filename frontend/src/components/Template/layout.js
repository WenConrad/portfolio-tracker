import * as React from "react";
// mui components
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Switch } from "@mui/material";
// mui icons
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// template components
import { mainListItems, LogOutItem } from "../Template/listItems";
import Copyright from "../Template/Template";
import { AppBar, Drawer } from "../Template/Template";
import { lightTheme, darkTheme } from "../Template/theme";

import colorMode from "../../providers/DarkModeProvider"


import { authContext } from "../../providers/AuthProvider";

import { Outlet, useNavigate, useParams } from "react-router-dom";


const Layout = ({content}) => {
  const { logout, user } = React.useContext(authContext);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  const logoutRedirect = function () {
    logout().then((res) => {
      navigate("/login");
    });
  };
  
  const [dark, setDark] = React.useState(false)
  const appliedTheme = createTheme(dark ? lightTheme : darkTheme);

  return (
    <React.Fragment>
        <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
        
        <AppBar position="absolute" open={open}>
            <Toolbar
            sx={{
                pr: "24px", // keep right padding when drawer closed
            }}
            >
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
            >
                Portfolio Tracker
            </Typography>

            <Switch color="secondary" checked={dark} onChange={() => {setDark(!dark)} } />

            <IconButton color="inherit">
                <Badge color="secondary">
                <AccountCircleIcon />
                </Badge>
            </IconButton>
            </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
            <Toolbar
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
            }}
            >
            <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
            </IconButton>
            </Toolbar>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>
            <LogOutItem signout={logoutRedirect} />
            </List>
        </Drawer>

        {/* Outlet for content */}
        <Outlet />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Layout
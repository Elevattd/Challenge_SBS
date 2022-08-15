import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";
import { Link } from "react-router-dom";
import { deepOrange, deepPurple } from "@mui/material/colors";

const Navbar = () => {
  const [openMenu, setOpenMnu] = React.useState(false);
  const currentUser = null;

  return (
    <AppBar position="static" sx={{ bgcolor: deepPurple[400] }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={() => setOpenMnu(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={openMenu} onClose={() => setOpenMnu(false)}>
          <Box p={1} width="200px" textAlign="center" role="presentation">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>MD</Avatar>
            {!currentUser ? (
              <Typography variant="h6">Usuario</Typography>
            ) : (
              currentUser
            )}
          </Box>
          <Box></Box>
          <Typography variant="h6" justifyContent="left">
            Filtros
          </Typography>
        </Drawer>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/">
          About us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

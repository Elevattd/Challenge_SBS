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
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Link } from "react-router-dom";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Search, SearchIconWrapper, StyledInputBase } from "./useNavbar";

const Navbar = () => {
  const [openMenu, setOpenMnu] = React.useState(false);
  const currentUser = null;

  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Drawer
            anchor="left"
            open={openMenu}
            onClose={() => setOpenMnu(false)}
          >
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
          <Search
            sx={{
              xs: "hidden",
              sm: "block",
              position: "absolute",
              right: "0",
              marginRight: "1rem",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

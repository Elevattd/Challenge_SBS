import React from "react";
import productsService from "../../services/productsService";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { actionDispatch } from "../../features/actions";
import { useAppDispatch } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { Search, StyledInputBase } from "./useNavbar";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMnu] = React.useState(false);
  const [name, setName] = React.useState("");
  const { setProduct } = actionDispatch(useAppDispatch());
  const currentUser = null;
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value as string);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  const handleSubmit = async (
    e: React.SyntheticEvent | React.MouseEvent<HTMLElement>
  ) => {
    //TODO: Poner alertas aca.
    e.preventDefault();
    productsService
      .getProductByName(name.toLowerCase())
      .then((product) => {
        if (!product?.productByName) {
          alert("No products found");
          return;
        }
        setName("");
        setProduct(product);
        let id = product?.productByName?.id;
        navigate(`/product/${id}`);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

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
            <button onClick={handleSubmit}>
              <SearchIcon />
            </button>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              type="text"
              value={name}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

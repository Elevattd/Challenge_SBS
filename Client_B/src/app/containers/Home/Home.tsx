import React, { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { useAppDispatch } from "../../hooks";
import productsService from "../../services/productsService";
import ProductCreate from "../../components/ProductCreate/ProductCreate";
import { socket } from "../../graphql";
import { actionDispatch } from "../../features/actions";
import { Button, Container, Typography } from "@mui/material";

const Home = () => {
  const { setProducts } = actionDispatch(useAppDispatch());

  useEffect(() => {
    try {
      productsService.getProducts().then((products) => {
        setProducts(products);
      });
    } catch (error) {
      throw error;
    }
  }, []);

  socket.on("refreshList", () => {
    productsService.getProducts().then((products) => {
      setProducts(products);
    });
  });

  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        paddingTop={5}
      >
        Bienvenido administrador.
      </Typography>

      <ProductCreate />
      <ProductList />
    </Container>
  );
};

export default Home;

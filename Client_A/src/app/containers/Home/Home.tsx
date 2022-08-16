import ProductList from "../../components/ProductList/ProductList";
import { useAppDispatch } from "../../hooks";
import productsService from "../../services/productsService";
import { socket } from "../../graphql";
import { useEffect } from "react";
import { actionDispatch } from "../../features/actions";
import { Container, Typography } from "@mui/material";

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  socket.on("refreshList", () => {
    productsService.getProducts().then((products) => {
      setProducts(products);
    });
  });

  return (
    <Container>
      <Typography variant="h1">NFT store.</Typography>
      <ProductList />
    </Container>
  );
};

export default Home;

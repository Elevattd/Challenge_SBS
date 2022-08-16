import styled from "@emotion/styled";
import { Button, Card, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { actionDispatch } from "../../features/actions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import productsService from "../../services/productsService";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./ProductList.css";

const ProductList = () => {
  const products = useAppSelector((state) => state.products.products);
  const [open, setOpen] = useState(false);
  const { setProduct } = actionDispatch(useAppDispatch());

  const handleClick = async (productId: string) => {
    productsService.getProduct(productId).then((product) => {
      setProduct(product);
    });
    setOpen(true);
  };

  const productList: any = products
    ? products?.map((product: any) => (
        <Grid
          item
          xs={8}
          sm={6}
          md={4}
          key={product.id}
          className="grid__container"
        >
          <Card sx={{ maxWidth: 345 }} className="grid__item">
            <Typography variant="h6">
              ID: {product.id.slice(0, 10)}...
            </Typography>
            <Typography variant="h4" color="red">
              {product.name[0].toUpperCase() + product.name.slice(1)}
            </Typography>
            <img src={product.image} alt={product.name} height="140" />
            <br />
            <br />
            <Typography>{product.description.slice(0, 60)}...</Typography>
            <h3>Precio: ${product.price},00</h3>
            <Button
              onClick={() => {
                handleClick(product.id);
              }}
            >
              Más info
            </Button>
          </Card>
        </Grid>
      ))
    : null;
  return (
    <div>
      <br />
      <br />
      {products && (
        <Grid container spacing={3}>
          {productList}
        </Grid>
      )}
      {open && (
        <ProductDetails
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ProductList;

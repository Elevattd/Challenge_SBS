import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Product } from "../../components/ProductList/types";
import { actionDispatch } from "../../features/actions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import useDetails from "./useDetails";

const Details = () => {
  const product = useAppSelector((state): Product => state.products.product);
  const { style, handleClear } = useDetails();
  const { setFooterOff } = actionDispatch(useAppDispatch());

  useEffect(() => {
    setFooterOff();
  }, []);

  return (
    <div>
      {product && Object.keys(product).length ? (
        <Card sx={style}>
          <img src={product.image} alt={product.name} height="250" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product?.name?.replace(
                product.name.charAt(0),
                product.name.charAt(0).toUpperCase()
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <Typography variant="body1" color="text.secondary">
            $ {product.price},00
          </Typography>
          <CardActions>
            <Button size="small" onClick={handleClear}>
              Volver
            </Button>
          </CardActions>
        </Card>
      ) : (
        <h1>cargando</h1>
      )}
    </div>
  );
};

export default Details;

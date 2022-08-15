import { Button } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../hooks";
import ProductDetails from "../ProductDetails/ProductDetails";

const ProductList = () => {
  const products = useAppSelector((state) => state.products.products);
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");

  const handleClick = async (productId: string) => {
    setProductId(productId);
    setOpen(true);
  };

  const productList: any = products
    ? products?.map((product: any) => (
        <div key={product.id}>
          <h3>ID: {product.id}</h3>
          <h1>
            Nombre: {product.name[0].toUpperCase() + product.name.slice(1)}
          </h1>
          <img src={product.image} alt={product.name} height="140" />
          <p>Descripcion: {product.description.slice(0, 60)}...</p>
          <h3>Precio: ${product.price},00</h3>
          <Button
            onClick={() => {
              handleClick(product.id);
            }}
          >
            Más info
          </Button>
        </div>
      ))
    : null;
  return (
    <div>
      {products && productList}
      {open && (
        <ProductDetails
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          product={productId}
        />
      )}
    </div>
  );
};

export default ProductList;

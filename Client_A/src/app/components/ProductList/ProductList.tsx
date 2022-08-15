import { Button } from "@mui/material";
import { useAppSelector } from "../../hooks";

const ProductList = () => {
  const products = useAppSelector((state) => state.products.products);

  const productList: any = products
    ? products?.map((product: any) => (
        <div key={product.id}>
          <h3>ID: {product.id}</h3>
          <h1>
            Nombre: {product.name[0].toUpperCase() + product.name.slice(1)}
          </h1>
          <img src={product.image} alt={product.name} />
          <p>Descripcion: {product.description.slice(0, 60)}...</p>
          <h3>Precio: ${product.price},00</h3>
          <Button>Más info</Button>
        </div>
      ))
    : null;
  return <div>{products && productList}</div>;
};

export default ProductList;

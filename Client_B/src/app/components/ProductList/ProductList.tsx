import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { useAppSelector } from "../../hooks";
import { useState } from "react";
import ProductUpdate from "../ProductUpdate/ProductUpdate";
import productsService from "../../services/productsService";
import { socket } from "../../graphql";
import Swal from "sweetalert2";
import { Toast } from "../../utils/alerts";

const ProductList = () => {
  const products = useAppSelector((state) => state.products.products);
  const [inputData, setInputData] = useState({});
  const [open, setOpen] = useState(false);

  const handleUpdate = async (product: string) => {
    setInputData(product);
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: `
        ¿Esta seguro que desea elimiar el producto?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "orange",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmar",
      }).then(async (r) => {
        if (r.isConfirmed) {
          await productsService.deleteProduct(id);
          socket.emit("deleteProduct");
          Toast.fire({
            icon: "warning",
            title: `Producto eliminado!`,
          });
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const productList: any = products
    ? products?.map((product: any) => (
        <TableRow
          key={product.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {product.id.slice(0, 10)}...
          </TableCell>
          <TableCell component="th" scope="row">
            {product.name[0].toUpperCase() + product.name.slice(1)}
          </TableCell>
          <TableCell component="th" scope="row">
            $ {product.price},00
          </TableCell>
          <TableCell component="th" scope="row">
            <Button onClick={() => handleDelete(product.id)}>
              <DeleteIcon />
            </Button>
            <Button
              onClick={() => {
                handleUpdate(product);
              }}
            >
              <UpdateIcon />
            </Button>
          </TableCell>
        </TableRow>
      ))
    : null;
  return (
    <Container>
      <TableContainer>
        <Table sx={{ minWidth: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                ID
              </TableCell>
              <TableCell component="th" scope="row">
                Nombre
              </TableCell>
              <TableCell component="th" scope="row">
                Precio
              </TableCell>
              <TableCell component="th" scope="row"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{products && productList}</TableBody>
        </Table>
      </TableContainer>
      {open && (
        <ProductUpdate
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          inputData={inputData}
        />
      )}
      <br />
      <br />
    </Container>
  );
};

export default ProductList;

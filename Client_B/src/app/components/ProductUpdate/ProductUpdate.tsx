import { Box, Button, Input, Modal, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { socket } from "../../graphql";
import productsService from "../../services/productsService";
import { Toast } from "../../utils/alerts";
import { Product } from "../ProductList/types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductUpdate = ({ open, handleClose, inputData }: any) => {
  const initialState: Product = {
    name: "",
    description: "",
    image: "",
    price: 0,
  };

  const [input, setInput] = React.useState(initialState);

  useEffect(() => {
    if (Object.keys(inputData).length) {
      setInput(inputData);
    }
  }, [inputData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let newProduct = await productsService.updateProduct({ ...input });
      if (newProduct) {
        setInput(initialState);
        socket.emit("updateProduct");
        handleClose();
        Toast.fire({
          icon: "success",
          title: "Producto modificado correctamente!",
        });
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Se produjo un error al modificar el producto!",
      });
      console.log("error", error);
    }
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [target.name]: target.value });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              id="name"
              placeholder="Nombre del producto"
              className="input-field"
              onChange={handleInputChange}
              value={input.name}
            />
            <br />
            <Input
              name="description"
              type="text"
              id="description"
              placeholder="description del producto"
              className="input-field"
              onChange={handleInputChange}
              value={input.description}
            />
            <br />
            <Input
              name="image"
              type="text"
              id="image"
              placeholder="image del producto"
              className="input-field"
              onChange={handleInputChange}
              value={input.image}
            />
            <br />
            <Input
              name="price"
              type="number"
              id="price"
              placeholder="price del producto"
              className="input-field"
              onChange={handleInputChange}
              value={input.price}
            />
            <br />
            <div>
              <Button
                color="primary"
                variant="outlined"
                type="submit"
                className="btn-primary"
              >
                Aceptar
              </Button>
              <Button
                color="primary"
                variant="outlined"
                className="btn-primary"
                onClick={handleClose}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductUpdate;

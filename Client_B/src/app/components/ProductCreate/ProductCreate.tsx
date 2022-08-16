import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import React from "react";
import { socket } from "../../graphql";
import productsService from "../../services/productsService";
import useProductCreate from "./useProductCreate";

const ProductCreate = () => {
  const { style, initialState } = useProductCreate();
  const [input, setInput] = React.useState(initialState);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let newProduct = await productsService.postProduct({ ...input });
      if (newProduct) {
        setInput(initialState);
        socket.emit("createProduct");
        handleClose();
      }
    } catch (error) {
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
      <br />
      <br />
      <Button onClick={handleOpen} variant="contained">
        Agregar producto.
      </Button>
      <br />
      <br />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Nombre"
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Nombre del producto"
                  className="input-field"
                  onChange={handleInputChange}
                  value={input.name}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item sm={6}>
                <TextField
                  label="Precio"
                  name="price"
                  type="number"
                  id="price"
                  placeholder="Precio del producto"
                  className="input-field"
                  onChange={handleInputChange}
                  value={input.price}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Descripción"
                  name="description"
                  type="text"
                  id="description"
                  placeholder="Descripción del producto"
                  className="input-field"
                  onChange={handleInputChange}
                  value={input.description}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Imagen"
                  name="image"
                  type="text"
                  id="image"
                  placeholder="image del producto"
                  className="input-field"
                  onChange={handleInputChange}
                  value={input.image}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
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
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductCreate;

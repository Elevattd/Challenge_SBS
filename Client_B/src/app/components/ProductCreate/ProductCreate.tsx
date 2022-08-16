import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import { socket } from "../../graphql";
import productsService from "../../services/productsService";
import { errorInput, validateForm } from "../../utils/hooks/useValidate";
import useProductCreate from "./useProductCreate";
import { Toast } from "../../utils/alerts";

const ProductCreate = () => {
  const { style, initialState } = useProductCreate();
  const [input, setInput] = React.useState(initialState);
  const [errorInput, setErrorInput] = useState<errorInput>({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInput(initialState);
    setOpen(false);
    setErrorInput({});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (Object.keys(errorInput).length >= 1 || input.name === "") {
        Toast.fire({
          icon: "error",
          title: `Corrija los errores.`,
        });
      } else {
        let newProduct = await productsService.postProduct({ ...input });
        if (newProduct) {
          Toast.fire({
            icon: "success",
            title: `Producto creado correctamente!.`,
          });
          setInput(initialState);
          socket.emit("createProduct");
          handleClose();
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [target.name]: target.value });
    setErrorInput(validateForm({ ...input, [target.name]: target.value }));
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
                  error={!errorInput.name ? false : true}
                  helperText={errorInput.name}
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
                  error={!errorInput.price ? false : true}
                  helperText={errorInput.price}
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
                  error={!errorInput.description ? false : true}
                  helperText={errorInput.description}
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
                  error={!errorInput.image ? false : true}
                  helperText={errorInput.image}
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

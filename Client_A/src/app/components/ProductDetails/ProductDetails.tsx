import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { actionDispatch } from "../../features/actions";
import { useAppDispatch, useAppSelector } from "../../hooks";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 300,
  p: 4,
};

const ProductDetails = ({ open, handleClose }: any) => {
  const product = useAppSelector((state) => state.products.product);
  const { clearProduct } = actionDispatch(useAppDispatch());

  const handleCloseModal = (e: any) => {
    e.preventDefault();
    handleClose();
    clearProduct();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={true}
        disableEscapeKeyDown={true}
      >
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
              <Button size="small" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </CardActions>
          </Card>
        ) : (
          <h1>cargando</h1>
        )}
      </Modal>
    </div>
  );
};

export default ProductDetails;

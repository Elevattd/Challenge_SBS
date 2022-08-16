import { Product } from "../ProductList/types";

const useProductCreate = () => {
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

  const initialState: Product = {
    name: "",
    description: "",
    image: "",
    price: null,
  };

  return { style, initialState };
};

export default useProductCreate;

import { useNavigate } from "react-router-dom";
import { actionDispatch } from "../../features/actions";
import { useAppDispatch } from "../../hooks";

const useDetails = () => {
  const { clearProduct } = actionDispatch(useAppDispatch());
  const { setFooterOn } = actionDispatch(useAppDispatch());
  const navigate = useNavigate();
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

  const handleClear = (e: any) => {
    e.preventDefault();
    clearProduct();
    navigate("/");
    setFooterOn();
  };

  return { style, handleClear };
};

export default useDetails;

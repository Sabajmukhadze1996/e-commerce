import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Translation } from "../../translation/TranslationContextProvider";
import { MdDone } from "react-icons/md";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "seashell",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
  "@media (max-width: 585px)": {
    width: "95%",
  },
};

export default function HomePageDetailsModal({
  open,
  setOpen,
  handleCloseCartAddedModal,
  name,
  model,
  price,
  oldPrice,
  release_year,
  weight,
  battery_mah,
  chipset,
  image,
}: any) {

  const { content } = useContext(Translation);

  return (
    <Modal
      open={open}
      onClose={handleCloseCartAddedModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Box sx={style}>
        <h5>{content.brand}: <span style={{fontWeight: "400"}}>{name}</span></h5>

        <img src={image} alt="product" width={120} height={120}  style={{marginBottom: "0.9rem"}}/>

        <ul className="list-group">
          <li className="list-group-item" aria-current="true">
            <strong>{content.model}:</strong> {model}
          </li>
          <li className="list-group-item" aria-current="true">
            <strong>{content.price}:</strong> <span style={{color: "#28a745"}}>$ {price}</span>&nbsp;&nbsp;<span style={{textDecorationLine: "line-through", fontWeight: "500", color: "#e31f1f",}}>$ {oldPrice}</span> 
          </li>
          <li className="list-group-item" aria-current="true">
            <strong>{content.release_year}:</strong> {release_year}
          </li>
          <li className="list-group-item" aria-current="true">
            <strong>{content.weight}:</strong> {weight} - {content.grams}
          </li>
          <li className="list-group-item" aria-current="true">
            <strong>{content.battery}:</strong> {battery_mah} - mAh
          </li>
          <li className="list-group-item" aria-current="true">
            <strong>{content.chipset}:</strong> {chipset}
          </li>
        </ul>

        <button
          className="btn btn-sm btn-dark mt-3 px-5 float-end"
          onClick={() => setOpen(false)}
        >
          {content.default_close}
        </button>
      </Box>
    </Modal>
  );
}

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
  width: "300px",
  height: "145px",
  bgcolor: "seashell",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
};

export default function HomePageCartAddedAlertModal({
  open,
  handleCloseCartAddedModal,
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
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h3"
          style={{
            textAlign: "center",
            marginTop: "1.1rem",
            fontSize: "1rem",
            color: "#333",
          }}
        >
          <MdDone size={30} color="#28a745" />
          &nbsp; &nbsp;
          {content.product_added_in_cart}
        </Typography>
        <button
          onClick={() => handleCloseCartAddedModal()}
          className="btn btn-sm btn-success px-4"
          style={{ float: "right", letterSpacing: "1.5px", marginTop: "1rem" }}
        >
          {content.default_close}
        </button>
      </Box>
    </Modal>
  );
}

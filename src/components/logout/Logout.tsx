import React, { useContext } from "react";
import "./logout.css";
import { SignupContext } from "../signup/SignUpContextProvider";
import { Translation } from "../../translation/TranslationContextProvider";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "280px",
  height: "180px",
  bgcolor: "#FFFFFF",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
};

const Logout = () => {
  const { setIsSubmitted } = useContext(SignupContext);
  const { content } = useContext(Translation);

  const logout = () => {
    setIsSubmitted(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        style={{
          fontSize: "10px",
          fontWeight: 600,
          paddingBlock: "0.4rem",
          width: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          letterSpacing: "0.5px",
          transform: "scale(0.98)",
        }}
        className="btn btn-danger "
        onClick={handleOpen}
      >
        {content.signout}
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="logout-modal">
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
            &nbsp; &nbsp;
            {content.Are_you_sure_you_want_to_log_out}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <button
              onClick={() => {
                handleClose();
              }}
              className="btn btn-sm btn-success btn-sm px-4"
              style={{
                float: "right",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
            >
              {content.no}
            </button>
            <button
              onClick={() => {
                handleClose();
                logout();
              }}
              className="btn btn-sm btn-danger btn-sm px-4"
              style={{
                float: "right",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
            >
              {content.yes}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Logout;

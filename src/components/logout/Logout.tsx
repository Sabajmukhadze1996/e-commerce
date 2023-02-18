import React, { useContext } from "react";
import { SignupContext } from "../signup/SignUpContextProvider";
import { Translation } from "../../translation/TranslationContextProvider";


import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdDone } from "react-icons/md"


const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "250px",
    height: "145px",
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
        style={{ fontSize: "0.58rem", fontWeight: 600 }}
        className="btn btn-danger btn-sm float-end"
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
        &nbsp;
        &nbsp;
        {content.Are_you_sure_you_want_to_log_out}
        </Typography>
        <button
          onClick={() => {handleClose(); logout()}}
          className="btn btn-sm btn-danger px-4"
          style={{ float: "right", letterSpacing: "1.5px", marginTop: "1rem" }}
        >
         
         {content.signout}
        </button>
      </Box>
    </Modal>




    </div>
  );
};

export default Logout;

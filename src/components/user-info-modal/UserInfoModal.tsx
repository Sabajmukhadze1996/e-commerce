import React, { useContext } from "react";
import "./user-info-modal.css";
import { SignupContext } from "../signup/SignUpContextProvider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Translation } from "../../translation/TranslationContextProvider";
import { FaUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "320px",
  height: "200px",
  bgcolor: "#FFFFFF",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
  padding: "0px",
  paddingTop: "0.6rem",
};

export default function UserInfoModal({
  handleCloseUserModal,
  openUserModal,
  userName,
}: any) {
  const { content } = useContext(Translation);
  const { formattedDate } = useContext(SignupContext);

  return (
    <Modal
      open={openUserModal}
      onClose={handleCloseUserModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="icon-container">
          <FaUserCircle fill="#444" size={40} />
        </div>
        <div className="close-container" onClick={handleCloseUserModal}>
          <IoMdClose fill="#fff" size={23} />
        </div>

        {
          <ul className="list-group mt-4">
            <li className="list-group-item">
              <span><span className="username">{content.usernameTwo}</span>: {userName.substring(0, 37)}</span>
            </li>
            <li className="list-group-item">
              <span>
                <span className="label">{content.REGISTRATION_DATE}</span>:{" "}
                {formattedDate}
              </span>
            </li>
          </ul>
        }
      </Box>
    </Modal>
  );
}

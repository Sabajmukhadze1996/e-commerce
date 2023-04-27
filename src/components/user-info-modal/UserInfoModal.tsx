import React, { useContext, useState } from "react";
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
  maxWidth: "480px",
  width: "95%",
  height: "280px",
  bgcolor: "#FFFFFF",
  boxShadow: 24,
  outline: "none",
  borderRadius: "7px",
  padding: "0px",
  paddingTop: "0.6rem",
  backgroundColor: "#13172a",
};

export default function UserInfoModal({
  handleCloseUserModal,
  openUserModal,
  userName,
}: any) {
  const { content } = useContext(Translation);
  const { formattedDate, isUserGuest, setIsUserGuest } =
    useContext(SignupContext);

  return (
    <Modal
      open={openUserModal}
      onClose={handleCloseUserModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="user-info-modal pt-5">
        <div className="icon-container">
          <FaUserCircle fill="#fff" size={65} />
        </div>
        <div className="close-container" onClick={handleCloseUserModal}>
          <IoMdClose fill="#fff" size={29} />
        </div>

        {isUserGuest ? (
          <h2 className="guest-title">{content.you_are_here_as_a_guest}</h2>
        ) : (
          <ul className="list-group" style={{ marginTop: "4.6rem" }}>
            <li
              style={{
                fontSize: "1.01rem",
                paddingBlock: "1.4rem",
                backgroundColor: "#f1f1f1",
              }}
              className="list-group-item border border-transparent"
            >
              <span>
                <span className="username">{content.usernameTwo}:</span>{" "}
                {userName.substring(0, 37)}
              </span>
            </li>
            <li
              style={{
                fontSize: "1.01rem",
                paddingBlock: "1.4rem",
                backgroundColor: "#f1f1f1",
              }}
              className="list-group-item   border border-transparent"
            >
              <span>
                <span className="label">{content.REGISTRATION_DATE}:</span>{" "}
                {formattedDate}
              </span>
            </li>
          </ul>
        )}
      </Box>
    </Modal>
  );
}

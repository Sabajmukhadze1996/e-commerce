import React, { useContext, useState } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import "./banks.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import bankOfGeorgiaLogo from "../../images/bank-of-georgia.png";
import procreditBankLogo from "../../images/procredit-bank-img.png";
import libertyBankLogo from "../../images/liberty-bank-img.png";
import { RiToolsFill } from "react-icons/ri";
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

const Banks = () => {
  const [modal, setModal] = useState(false);

  const { content } = useContext(Translation);

  return (
    <>
      <div className="banks-container" onClick={() => setModal(true)}>
        <div className="first-cont">
          <img
            style={{ width: "50px", borderRadius: "100%" }}
            src={bankOfGeorgiaLogo}
            alt="bank"
          />
          <span>{content.Installment_by_the_Bank_of_Georgia}</span>
        </div>
        <div className="second-cont">
          <img src={procreditBankLogo} alt="bank" />
          <span>{content.Installment_by_the_procredit_bank}</span>
        </div>
        <div className="third-cont">
          <img src={libertyBankLogo} alt="bank" />
          <span style={{ marginTop: "10px" }}>
            {content.Installment_by_the_liberty_bank}
          </span>
        </div>
      </div>

      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          id="banks-modal"
          sx={style}
          className="user-info-modal pt-5 text-center"
        >
          <div className="close-container" onClick={() => setModal(false)}>
            <IoMdClose fill="#fff" size={29} />
          </div>
          <RiToolsFill size={55} color="#fff" />
          <h3>{content.The_service_is_currently_unavailable}</h3>
        </Box>
      </Modal>
    </>
  );
};

export default Banks;

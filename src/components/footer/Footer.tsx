import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import "./footer.css";

export const Footer = () => {
  const { content } = useContext(Translation);

  return (
    <footer className="mt-5 pb-2">
      <div className="rights-reserved-div">
        <span style={{fontWeight: 400}}>{content.all_rights_reserved}</span>
      </div>
      <div className="copyright-div d-flex justify-content-center">
        <span style={{fontWeight: 500}}>Copyright &copy; 2023</span>
      </div>
    </footer>
  );
};

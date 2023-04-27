import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import "./banks.css";
import bankOfGeorgiaLogo from "../../images/bank-of-georgia-logo.png";

const Banks = () => {
  const { content } = useContext(Translation);

  return (
    <div className="banks-container">
      <ul className="list-group">
        <li className="list-group-item   border border-transparent ">
          <span className="d-flex align-items-end gap-1">
            <img src={bankOfGeorgiaLogo} alt="Bank of Georgia" />
            {content.Installment_by_the_Bank_of_Georgia}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Banks;

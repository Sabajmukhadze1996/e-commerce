import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import { SignupContext } from "./SignUpContextProvider";
import "./signup.css";
import TranslationComp from "../../translation/TranslationComponent";

const Signup = ({}: any) => {
  const {
    userName,
    setUserName,
    password,
    setPassword,
    handleSubmit,
    userNameErrorText,
    passwordErrorText,
  } = useContext(SignupContext);

  const { content } = useContext(Translation);

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h4 style={{ textAlign: "center" }}>{content.register}</h4>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <TranslationComp />
        </div>
        <div className="form-group">
          <label htmlFor="username">{content.username}</label>
          <input
            type="text"
            className="form-control mt-2"
            id="username"
            placeholder={content.username}
            value={userName}
            onChange={(event: any) => setUserName(event.target.value)}
          />
          <h6 style={{ color: "red" }}> {userNameErrorText}</h6>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">{content.password}</label>
          <input
            type="password"
            className="form-control mt-2"
            id="password"
            placeholder={content.password}
            value={password}
            onChange={(event: any) => setPassword(event.target.value)}
          />
          <h6 style={{ color: "red" }}> {passwordErrorText}</h6>
        </div>
        <button type="submit" className="btn btn-primary mt-4 pt-2 pb-2 w-100">
          {content.submit}
        </button>
      </form>
    </div>
  );
};

export default Signup;

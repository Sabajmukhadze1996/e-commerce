import React, { useState, useEffect, useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import { SignupContext } from "./SignUpContextProvider";
import "./signup.css";
import TranslationComp from "../../translation/TranslationComponent";
import { useNavigate } from "react-router-dom";

const Signup = ({}: any) => {
  const {
    userName,
    setUserName,
    password,
    setPassword,
    handleSubmit,
    registerasGuest,
    userNameErrorText,
    passwordErrorText,
  } = useContext(SignupContext);

  const { content } = useContext(Translation);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        {loading ? (
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ marginTop: "190px" }}>
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h4
             className="register-title"
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                marginTop: "2rem",
              }}
            >
              {content.register}
            </h4>
            <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "1rem" }}>
              <TranslationComp />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-2"
                id="username"
                placeholder={content.username}
                value={userName}
                onChange={(event: any) => setUserName(event.target.value)}
              />
              <label style={{ color: "#FFFFFF" }} htmlFor="username">
                {content.username}
              </label>
              <h6 style={{ color: "red" }}> {userNameErrorText}</h6>
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control mt-2"
                id="password"
                placeholder={content.password}
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
              />
              <label style={{ color: "#FFFFFF" }} htmlFor="password">
                {content.password}
              </label>
              <h6 style={{ color: "red" }}> {passwordErrorText}</h6>
            </div>
            <button
              type="submit"
              id="register-btn"
              className="btn btn-primary mt-4  w-100"
            >
              {content.submit}
            </button>
            <button
            onClick={registerasGuest}
              id="guest-btn"
              className="btn btn-primary mt-4  w-100"
            >
              {content.Log_in_as_a_guest}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Signup;

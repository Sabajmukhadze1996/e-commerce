import React, { useState, useEffect, createContext } from "react";

export const SignupContext = createContext<any>({});

const SignUpContextProvider = ({ children }: any) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [userNameErrorText, setUserNameErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [formErrorText, setFormErrorText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!userName.length && !password.length) {
      setUserNameErrorText("Please enter a username.");
      setPasswordErrorText("Please enter a password.");
      setFormErrorText("Please enter a username and password.");
    } else if (!userName.length) {
      setUserNameErrorText("Please enter a username.");
      setPasswordErrorText("");
      setFormErrorText("");
    } else if (!password.length) {
      setUserNameErrorText("");
      setPasswordErrorText("Please enter a password.");
      setFormErrorText("");
    } else {
      setUserNameErrorText("");
      setPasswordErrorText("");
      setFormErrorText("");
      setIsSubmitted(true);
      handleRegistration()
    }
  };

  useEffect(() => {
    if (!userName.length && !password.length) {
      setFormErrorText("Please enter a username and password.");
    } else {
      setFormErrorText("");
    }
  }, [userName, password]);

  const [registrationDate, setRegistrationDate] = useState<Date | null>(null);

  const handleRegistration = () => {
    setRegistrationDate(new Date());
  };

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const formattedDate: string =
    registrationDate?.toLocaleString([], options) || "";

  return (
    <SignupContext.Provider
      value={{
        userName,
        setUserName,
        password,
        setPassword,
        userNameErrorText,
        setUserNameErrorText,
        passwordErrorText,
        setPasswordErrorText,
        formErrorText,
        isSubmitted,
        formattedDate,
        setIsSubmitted,
        handleSubmit,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export default SignUpContextProvider;

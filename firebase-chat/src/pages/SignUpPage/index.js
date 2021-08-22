import React, { useState } from "react";
import FormPageContainer from "../../Components/FormPageContainer";
import firebase from "firebase";

export const SignUpPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");

  const submitSignUp = (event) => {
    event.preventDefault();
    console.log("enviou", passwordValue, emailValue);
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((user) => {
        console.log(user);
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const onChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };
  const onChangesSenha = (event) => {
    setpasswordValue(event.target.value);
  };
  return (
    <FormPageContainer>
      <h1>Sign up Page</h1>
      <form onSubmit={submitSignUp}>
        <input type={"text"} placeholder={"Nome de usuario"} />
        <input
          onChange={onChangeEmail}
          value={emailValue}
          type={"email"}
          placeholder={"email"}
        />
        <input
          onChange={onChangesSenha}
          value={passwordValue}
          type={"password"}
          placeholder={"password"}
        />
        <button>Cadastro</button>
      </form>
    </FormPageContainer>
  );
};

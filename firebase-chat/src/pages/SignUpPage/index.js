import React, { useState, useLayoutEffect } from "react";
import FormPageContainer from "./SignUpPage.styles";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export const SignUpPage = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const history = useHistory();

  useLayoutEffect(() => {
    if (props.currentUser) {
      history.replace("/");
    }
  }, [props.currentUser]);

  const submitSignUp = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((credential) => {
        console.log(credential);
        return firebase
          .firestore()
          .collection("users")
          .doc(credential.user.uid)
          .set({
            name: nameValue,
          });
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <FormPageContainer>
      <h1>Sign up Page</h1>
      <form onSubmit={submitSignUp}>
        <input
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          type={"text"}
          placeholder={"Nome do usuario"}
        />
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          type={"email"}
          placeholder={"email"}
        />
        <input
          onChange={(e) => setpasswordValue(e.target.value)}
          value={passwordValue}
          type={"password"}
          placeholder={"password"}
        />
        <button>Cadastro</button>
      </form>
    </FormPageContainer>
  );
};

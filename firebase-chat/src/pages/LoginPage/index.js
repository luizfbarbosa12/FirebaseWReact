import React, { useContext, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import {
  Title,
  FormPageContainer,
  Inputs,
  StyledForm,
  LoginButton,
  GoogleLogin,
  SignUpButton,
} from "./LoginPage.styles";
import { ChatContext } from "../../GlobalContext/GlobalContext";

export const LoginPage = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const history = useHistory();

  const { states, setters } = useContext(ChatContext);

  const onClickSignup = () => {
    history.push("/cadastro");
  };

  useLayoutEffect(() => {
    if (states.currentUser) {
      history.push("/");
    }
  }, [states.currentUser]);

  const submitLogin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailValue, passwordValue)
      .then((user) => {
        console.log(user);
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setters.setCurrentUser(result.user);
      })
      .catch((error) => {
        console.log("deu ruim", error);
      });
  };

  return (
    <FormPageContainer>
      <Title>Login</Title>
      <StyledForm onSubmit={submitLogin}>
        <Inputs
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          type={"email"}
          placeholder={"Email"}
        />
        <Inputs
          onChange={(e) => setpasswordValue(e.target.value)}
          value={passwordValue}
          type={"password"}
          placeholder={"Password"}
        />
        <LoginButton>Login</LoginButton>
        <GoogleLogin onClick={googleLogin} type="button">
          Login with google
        </GoogleLogin>
        <SignUpButton onClick={onClickSignup}>Sign Up</SignUpButton>
      </StyledForm>
    </FormPageContainer>
  );
};

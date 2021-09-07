import React, { useContext, useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import FormPageContainer from "./LoginPage.styles";
import { ChatContext } from "../../GlobalContext/GlobalContext";

export const LoginPage = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const history = useHistory();

  const { states } = useContext(ChatContext);

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
        console.log(result.user.uid);
        props.setGoogleUserId(result.user.uid);
      })
      .catch((error) => {
        console.log("deu ruim", error);
      });
  };

  return (
    <FormPageContainer>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
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
        <button>Login</button>
        <button onClick={googleLogin} type="button">
          Login com google
        </button>
        <button onClick={onClickSignup}>Cadastro</button>
      </form>
    </FormPageContainer>
  );
};

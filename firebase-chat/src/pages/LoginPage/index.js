import React, { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

import FormPageContainer from "../../Components/FormPageContainer";

export const LoginPage = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const history = useHistory();

  const onClickCadastro = () => {
    history.push("/cadastro");
  };

  useLayoutEffect(() => {
    if (props.currentUser) {
      history.push("/");
    }
  }, [props.currentUser]);

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

  const onChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };
  const onChangesSenha = (event) => {
    setpasswordValue(event.target.value);
  };

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log("funcionou");
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
        <button>Login</button>
        <button onClick={googleLogin} type="button">
          Login com google
        </button>
        <button onClick={onClickCadastro}>Cadastro</button>
      </form>
    </FormPageContainer>
  );
};

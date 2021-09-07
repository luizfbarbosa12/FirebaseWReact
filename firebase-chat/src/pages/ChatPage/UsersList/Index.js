import React, { useContext } from "react";
import { UsersListWrapper, UsersHeader } from "./UsersList.styles";
import firebase from "firebase/app";
import { ChatContext } from "../../../GlobalContext/GlobalContext";

const UsersList = (props) => {
  const { states, setters } = useContext(ChatContext);

  const onClickUser = (user) => {
    setters.setSelectedUser(user);
  };

  const onClickLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("funfou");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(states.users);
  return (
    <UsersListWrapper>
      <UsersHeader>
        <p>
          Bem vindo,{" "}
          {states.currentUser?.ac.displayName || props.googleUserId?.name}!
        </p>
        <button onClick={onClickLogout}>Logout</button>
      </UsersHeader>
      <hr />
      <h4>Conversas</h4>
      {states.users
        ?.filter((user) => {
          return user?.id !== states.currentUser?.uid;
        })
        .map((user, index) => {
          return (
            <div onClick={() => onClickUser(user)} key={index}>
              <p>{user.name}</p>
            </div>
          );
        })}
    </UsersListWrapper>
  );
};

export default UsersList;

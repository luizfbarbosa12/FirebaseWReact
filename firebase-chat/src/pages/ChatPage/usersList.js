import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from "firebase/app";

const UsersListWrapper = styled.div`
  border: 1px solid blue;
  height: 100vh;
  padding: 0 16px;
`;

const UsersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UsersList = (props) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await firebase
        .firestore()
        .collection("users")
        .get();

      const usersList = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setUsers(usersList);
    };

    getUsers();
  }, []);

  const onClickUser = (user) => {
    console.log("clicou na div");
    props.setSelectedUser(user);
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

  return (
    <UsersListWrapper>
      <UsersHeader>
        <p>Bem vindo, {props.currentUserData?.name}!</p>
        <button onClick={onClickLogout}>Logout</button>
      </UsersHeader>
      <hr />
      <h4>Conversas</h4>
      {users
        ?.filter((user) => {
          return user?.id !== props.currentUser?.uid;
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

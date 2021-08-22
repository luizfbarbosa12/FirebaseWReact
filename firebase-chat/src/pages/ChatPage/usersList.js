import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from "firebase/app";

const UsersListWrapper = styled.div`
  border: 1px solid blue;
  height: 100vh;
  padding: 0 16px;
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

  return (
    <UsersListWrapper>
      <div>
        <p>Bem vindo, usuário!</p>
        <hr />
        <h4>Conversas</h4>
        {users?.map((user, index) => {
          return (
            <div onClick={() => onClickUser(user)} key={index}>
              <p>{user.name}</p>
            </div>
          );
        })}
      </div>
    </UsersListWrapper>
  );
};

export default UsersList;

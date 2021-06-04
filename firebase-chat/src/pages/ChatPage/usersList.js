import React from "react";
import styled from "styled-components";

const UsersListWrapper = styled.div`
  border: 1px solid blue;
  height: 100vh;
  padding: 0 16px;
`;
const UsersList = () => {
  return (
    <UsersListWrapper>
      <div>
        <p>Bem vindo, usuário!</p>
        <hr />
        <h4>Conversas</h4>
        <div>
          <p>Darvas</p>
        </div>
        <div>
          <p>Amanda</p>
        </div>
      </div>
    </UsersListWrapper>
  );
};

export default UsersList;

import React, { useState } from "react";
import ChatContainer from "./ChatContainer";
import UsersList from "./usersList";
import styled from "styled-components";

const ChatContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState();
  const userId = "meuId";
  console.log(selectedUser);

  return (
    <ChatContainerWrapper>
      <UsersList setSelectedUser={setSelectedUser} />
      {selectedUser && (
        <ChatContainer currentUserId={userId} selectedUser={selectedUser} />
      )}
    </ChatContainerWrapper>
  );
};

export default ChatPage;

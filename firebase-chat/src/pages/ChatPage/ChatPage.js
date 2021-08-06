import React from "react";
import ChatContainer from "./ChatContainer";
import UsersList from "./usersList";
import styled from "styled-components";

const ChatContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

const ChatPage = () => {
  return (
    <ChatContainerWrapper>
      <UsersList />
      <ChatContainer />
    </ChatContainerWrapper>
  );
};

export default ChatPage;

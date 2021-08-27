import React, { useEffect, useState } from "react";
import ChatContainer from "./ChatContainer";
import UsersList from "./usersList";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ChatContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

const ChatPage = (props) => {
  const [selectedUser, setSelectedUser] = useState();
  const userId = "meuId";

  const history = useHistory();

  useEffect(() => {
    if (!props.currentUser) {
      history.push("/login");
    }
  }, [props.currentUser]);

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

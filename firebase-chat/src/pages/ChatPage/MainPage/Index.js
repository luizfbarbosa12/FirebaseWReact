import React, { useContext } from "react";
import ChatContainer from "../ChatContainer/Index";
import UsersList from "../UsersList/Index";
import { ChatContainerWrapper } from "./ChatPage.styles";
import { ChatContext } from "../../../GlobalContext/GlobalContext";

const MainPage = (props) => {
  const { states } = useContext(ChatContext);

  return (
    <ChatContainerWrapper>
      <UsersList googleUserId={props.googleUserId} />
      {states.selectedUser && (
        <ChatContainer googleUserId={props.googleUserId} />
      )}
    </ChatContainerWrapper>
  );
};

export default MainPage;

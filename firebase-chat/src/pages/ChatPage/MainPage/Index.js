import React, { useContext, useLayoutEffect } from "react";
import ChatContainer from "../ChatContainer/Index";
import UsersList from "../UsersList/Index";
import { ChatContainerWrapper } from "./ChatPage.styles";
import { ChatContext } from "../../../GlobalContext/GlobalContext";
import { useHistory } from "react-router";

const MainPage = (props) => {
  const { states } = useContext(ChatContext);
  const history = useHistory();

  useLayoutEffect(() => {
    if (!states.currentUser) {
      history.push("/login");
    }
  }, [states.currentUser]);
  return (
    <ChatContainerWrapper>
      <UsersList />
      {states.selectedUser && <ChatContainer />}
    </ChatContainerWrapper>
  );
};

export default MainPage;

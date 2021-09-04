import React, { useContext } from "react";
import ChatContainer from "../ChatContainer/Index";
import UsersList from "../UsersList/Index";
import { ChatContainerWrapper } from "./ChatPage.styles";
import { ChatContext } from "../../../GlobalContext/GlobalContext";

const MainPage = (props) => {
  const { states, setters } = useContext(ChatContext);

  return (
    <ChatContainerWrapper>
      <UsersList
      // googleUserId={props.googleUserId}
      // currentUser={props.currentUser}
      // setSelectedUser={setSelectedUser}
      // currentUserData={currentUserData}
      />
      {states.selectedUser && (
        <ChatContainer
        // googleUserId={props.googleUserId}
        // currentUsername={currentUserData?.name}
        // currentUserId={props.currentUser?.uid}
        // selectedUser={selectedUser}
        />
      )}
    </ChatContainerWrapper>
  );
};

export default MainPage;

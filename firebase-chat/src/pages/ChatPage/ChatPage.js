import React, { useEffect, useState } from "react";
import ChatContainer from "./ChatContainer";
import UsersList from "./usersList";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

const ChatContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

const ChatPage = (props) => {
  const [selectedUser, setSelectedUser] = useState();
  const history = useHistory();
  const [currentUserData, setCurrentUserData] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(props.currentUser?.uid)
      .get()
      .then((doc) => {
        setCurrentUserData(doc.data());
      });
  }, [props.currentUser?.uid]);

  useEffect(() => {
    if (!props.currentUser) {
      history.push("/login");
    }
  }, [props.currentUser]);

  return (
    <ChatContainerWrapper>
      <UsersList
        currentUser={props.currentUser}
        setSelectedUser={setSelectedUser}
        currentUserData={currentUserData}
      />
      {selectedUser && (
        <ChatContainer
          currentUsername={currentUserData.name}
          currentUserId={props.currentUser?.uid}
          selectedUser={selectedUser}
        />
      )}
    </ChatContainerWrapper>
  );
};

export default ChatPage;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import firebase from "firebase";

const ChatPageWrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 50px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Messages = styled.div`
  flex-grow: 1;
  border: 1px solid pink;
  padding-left: 16px;
  display: flex;
  flex-direction: column-reverse;
`;

const MessageInput = styled.form`
  height: 50px;
  border: 1px solid orange;
  display: flex;
  padding: 8px;

  input {
    flex-grow: 1;
    padding: 8px;
    font-size: 24px;
  }
`;

const mountChatIdFromUSerIds = (id1, id2) => {
  if (id1 > id2) {
    return `${id1}-${id2}`;
  } else {
    return `${id2}-${id1}`;
  }
};
const ChatContainer = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const onChangeNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  useEffect(() => {
    const getMessages = async () => {
      console.log(props.currentUserId);
      console.log(props.selectedUser);
      let chatId = mountChatIdFromUSerIds(
        props.currentUserId,
        props.selectedUser.id
      );

      console.log("chat Id", chatId);
      const ref = firebase
        .firestore()
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("sentAt", "desc");
      const querySnapshot = await ref.get();

      const messagesList = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessages(messagesList);
      console.log(messagesList);
    };

    getMessages();
  }, [props.currentUserId, props.selectedUser.id]);

  const sendMessage = (event) => {
    event.preventDefault();
    let chatId = mountChatIdFromUSerIds(
      props.currentUserId,
      props.selectedUser.id
    );
    const ref = firebase
      .firestore()
      .collection("chats")
      .doc(chatId)
      .collection("messages");

    ref.add({
      sentAt: new Date(),
      text: newMessage,
      username: props.currentUsername,
    });
  };
  return (
    <ChatPageWrapper>
      <Header>Conversa com {props.selectedUser.name}</Header>
      <Messages>
        {messages.map((message) => {
          return (
            <p>
              {message.username} - {message.text}
            </p>
          );
        })}
      </Messages>
      <MessageInput onSubmit={sendMessage}>
        <input
          onChange={onChangeNewMessage}
          value={newMessage}
          placeholder="envie sua mensagem"
        />
        <button>Enviar</button>
      </MessageInput>
    </ChatPageWrapper>
  );
};

export default ChatContainer;

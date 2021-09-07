import React, { useContext, useRef } from "react";
import {
  ChatPageWrapper,
  Header,
  Messages,
  MessageInput,
  MessageImageContainer,
} from "./ChatContainer.styles";
import { ChatContext } from "../../../GlobalContext/GlobalContext";
import firebase from "firebase";

const ChatContainer = (props) => {
  const fileInputRef = useRef(null);
  const { states, setters, functions } = useContext(ChatContext);

  const uploadFileUrl = async () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      const storageRef = firebase.storage().ref();
      const newFileRef = storageRef.child(file.name);
      await newFileRef.put(file);
      return newFileRef.getDownloadURL();
    } else {
      return null;
    }
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    let chatId = functions.mountChatIdFromUSerIds(
      states.currentUser?.uid,
      states.selectedUser?.id
    );
    const fileUrl = await uploadFileUrl();
    const ref = firebase
      .firestore()
      .collection("chats")
      .doc(chatId)
      .collection("messages");

    ref
      .add({
        sentAt: new Date(),
        text: states.newMessage,
        username: states.currentUser.ac.displayName,
        image: fileUrl,
      })
      .then(() => {
        setters.setNewMessage("");
      });
  };
  return (
    <ChatPageWrapper>
      <Header>Conversa com {states.selectedUser.name}</Header>
      <Messages>
        {states.messages.map((message, index) => {
          return (
            <div key={index}>
              <p>
                {message.username} - {message.text}
                {message.image && (
                  <MessageImageContainer src={message.image} alt="sent" />
                )}
              </p>
            </div>
          );
        })}
      </Messages>
      <MessageInput onSubmit={sendMessage}>
        <input type="file" ref={fileInputRef} />
        <input
          onChange={(event) => setters.setNewMessage(event.target.value)}
          value={states.newMessage}
          placeholder="envie sua mensagem"
        />
        <button>Enviar</button>
      </MessageInput>
    </ChatPageWrapper>
  );
};

export default ChatContainer;

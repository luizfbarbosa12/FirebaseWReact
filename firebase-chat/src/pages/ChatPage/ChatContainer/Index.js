import React, { useContext, useRef } from "react";
import {
  ChatPageWrapper,
  Header,
  Messages,
  MessageInput,
  MessageImageContainer,
  TextInput,
  FileInput,
  FileInputArea,
  PaperClip,
  SendButton,
  Message,
  Username,
  ProfilePicture,
  // SentAt,
} from "./ChatContainer.styles";
import { ChatContext } from "../../../GlobalContext/GlobalContext";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatContainer = () => {
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

  let today = new Date().toLocaleDateString();
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
        sentAt: today,
        text: states.newMessage,
        username:
          states.currentUser?.ac.displayName || states.currentUserData?.name,
        image: fileUrl,
      })
      .then(() => {
        setters.setNewMessage("");
      });
  };

  return (
    <ChatPageWrapper>
      <Header>
        <ProfilePicture
          src={
            "https://image.shutterstock.com/image-photo/headshot-portrait-smiling-millennial-male-600w-1667439913.jpg"
          }
        />
        Conversa com <span>&nbsp;{states.selectedUser.name}</span>
      </Header>
      <Messages>
        {states.messages.map((message, index) => {
          return (
            <Message key={index}>
              <p>
                <Username>{message.username}</Username> - {message.text}
                {message.image && (
                  <MessageImageContainer src={message.image} alt="sent" />
                )}
                {/* <SentAt>sent at {Date(message.sentAt.nanoseconds)}</SentAt> por que a hora atualiza??? */}
              </p>
            </Message>
          );
        })}
      </Messages>
      <MessageInput onSubmit={sendMessage}>
        <FileInputArea>
          <PaperClip icon={faPaperclip} />
          <FileInput ref={fileInputRef} />
        </FileInputArea>
        <TextInput
          onChange={(event) => setters.setNewMessage(event.target.value)}
          value={states.newMessage}
          placeholder="envie sua mensagem"
        />
        <SendButton>
          <FontAwesomeIcon icon={faPaperPlane} />
        </SendButton>
      </MessageInput>
    </ChatPageWrapper>
  );
};

export default ChatContainer;

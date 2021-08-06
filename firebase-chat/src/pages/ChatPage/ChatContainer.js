import React from "react";
import styled from "styled-components";

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

const MessageInput = styled.div`
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
const ChatContainer = () => {
  return (
    <ChatPageWrapper>
      <Header>Conversa com bla</Header>
      <Messages>
        <p>Darvas - Mensagem 1</p>
        <p>eu - Mensagem 2</p>
        <p>Darvas - Mensagem 3</p>
        <p>eu - Mensagem 4</p>
      </Messages>
      <MessageInput>
        <input placeholder="envie sua mensagem" />
        <button>Enviar</button>
      </MessageInput>
    </ChatPageWrapper>
  );
};

export default ChatContainer;

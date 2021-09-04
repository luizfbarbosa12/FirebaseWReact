import styled from "styled-components";

export const ChatPageWrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 50px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Messages = styled.div`
  flex-grow: 1;
  border: 1px solid pink;
  padding-left: 16px;
  display: flex;
  flex-direction: column-reverse;
`;

export const MessageInput = styled.form`
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

export const MessageImageContainer = styled.img`
  max-width: 200px;
`;

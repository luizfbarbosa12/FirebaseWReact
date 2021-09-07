import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ChatPageWrapper = styled.div`
  background-color: #262d31;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #6c7072;
`;

export const Header = styled.div`
  height: 4.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Messages = styled.div`
  flex-grow: 1;
  padding-left: 16px;
  display: flex;
  flex-direction: column-reverse;
`;

export const MessageInput = styled.form`
  height: 4rem;
  align-items: center;
  display: flex;
  padding: 8px;
`;

export const MessageImageContainer = styled.img`
  max-width: 200px;
`;

export const TextInput = styled.input`
  display: flex;
  flex: 1 1 22.33rem;
  height: 1.8rem;
  background-color: #323739;
  border-radius: 5rem;
  border: none;
  margin: 0.5rem 0.5rem;
  color: #d6d7d9;
  padding: 0.8rem;
  font-size: 0.8rem;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;

export const FileInputArea = styled.label`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const PaperClip = styled(FontAwesomeIcon)`
  position: absolute;
  cursor: pointer;
  font-size: 1rem;
`;
export const FileInput = styled.input.attrs({
  type: "file",
  accept: "image/*",
})`
  display: none;
  position: relative;
`;

export const SendButton = styled.button`
  border: none;
  background-color: #056162;
  color: inherit;
  border-radius: 50%;
  height: 2.4rem;
  width: 2.4rem;
  cursor: pointer;
`;

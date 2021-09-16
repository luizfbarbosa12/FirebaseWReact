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
  height: 5.3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  font-size: 1.6rem;
  font-weight: 400;
  border-bottom: 1px solid #6c7072;
  opacity: 0.8;
  gap: 0.8rem;

  & > span {
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export const ProfilePicture = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const Messages = styled.div`
  flex-grow: 1;
  padding-left: 1.6rem;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #323739;
  }

  &::-webkit-scrollbar-thumb {
    background: #056162;
  }
`;

export const MessageInput = styled.form`
  height: 6rem;
  align-items: center;
  display: flex;
  padding: 1rem;
`;

export const MessageImageContainer = styled.img`
  max-width: 20rem;
  border-radius: 0.4rem;
`;

export const TextInput = styled.input`
  display: flex;
  flex: 1 1 22.33rem;
  height: 3.5rem;
  background-color: #323739;
  border-radius: 5rem;
  border: none;
  margin: 0.5rem 0.5rem;
  color: #d6d7d9;
  padding: 1rem;
  font-size: 1.4rem;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;

export const FileInputArea = styled.label`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const PaperClip = styled(FontAwesomeIcon)`
  position: absolute;
  cursor: pointer;
  font-size: 2rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
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
  padding: 2.4rem;
  background-color: #056162;
  color: inherit;
  border-radius: 50%;
  height: 2.4rem;
  width: 2.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(115%);
  }

  & > svg {
    font-size: 2rem;
  }
`;

export const Message = styled.div`
  max-width: 50rem;
  width: max-content;
  height: max-content;
  background-color: ${(props) =>
    props.messagePositionRight ? "#056162" : "#131C21"};
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
  color: #e5eaeb;
  font-size: 1.4rem;
  position: relative;
  margin: 1rem 4rem;
  line-height: 1.6;
  box-shadow: 2px 2px 10px #000;
  align-self: ${(props) =>
    props.messagePositionRight ? "flex-end" : "flex-start"};

  &::before {
    content: "";
    height: 2rem;
    width: 2rem;
    position: absolute;
    left: 100%;
    top: 50%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background-color: ${(props) =>
      props.messagePositionRight ? "#056162" : "#131C21"};
    transform: translateX(-60%) translateY(-10%);
  }
`;

export const Username = styled.span`
  font-weight: 600;
  color: ${(props) => (props.messagePositionRight ? "#131C21" : "#056162")};
`;

export const SentAt = styled.p`
  opacity: 0.5;
  font-size: 1rem;
`;

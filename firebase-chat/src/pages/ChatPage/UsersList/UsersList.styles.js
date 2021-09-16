import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const UsersListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const UsersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.3rem;
  background: linear-gradient(45deg, #2a2f32 0%, #323739 100%);
  padding-left: 2.2rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  gap: 0.8rem;
  font-size: 1.6rem;
  text-transform: capitalize;

  & > img {
    cursor: pointer;
  }

  & > p {
    font-weight: 300;
  }
`;

export const ProfilePicture = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const SignOutButton = styled.button`
  background: transparent;
  border: none;
  padding: 1rem;
  font-size: 2rem;
  color: inherit;
  transition: all 0.3s ease;

  & > svg {
    cursor: pointer;
  }

  &:hover {
    color: #bdc0c1;
    transform: scale(1.2);
  }
`;

export const SearchArea = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #2a2f32;
  background-color: #131c21;
  display: flex;
`;
export const SearchInput = styled.input`
  display: flex;
  flex: 1 1 22.33rem;
  height: 2.5rem;
  background-color: #323739;
  border-radius: 5rem;
  border: none;
  margin: 1rem 1rem;
  color: #d6d7d9;
  padding: 1.2rem;
  font-size: 1.2rem;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1.4rem;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
`;

export const ConversationsContainer = styled.div`
  background-color: #131c21;
  flex: 1;
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

export const Conversation = styled.div`
  width: 100%;
  height: 5.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem;
  border-bottom: 1px solid #2a2f32;

  & > p {
    cursor: pointer;
  }
`;

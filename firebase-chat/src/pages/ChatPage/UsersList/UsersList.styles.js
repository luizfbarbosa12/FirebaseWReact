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
  height: 4.3rem;
  background: linear-gradient(45deg, #2a2f32 0%, #323739 100%);
  padding-left: 1.2rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  gap: 0.8rem;
  font-size: 1.1rem;
  text-transform: capitalize;

  & > img {
    cursor: pointer;
  }

  & > p {
    font-weight: 300;
  }
`;

export const ProfilePicture = styled.img`
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const SignOutButton = styled.button`
  background: transparent;
  border: none;
  padding: 1rem;
  font-size: 1.6rem;
  color: inherit;
  transition: all 0.3s ease;

  & > svg {
    cursor: pointer;
  }

  &:hover {
    color: #bdc0c1;
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

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
`;

export const ConversationsContainer = styled.div`
  background-color: #131c21;
  flex: 1;
`;

export const Conversation = styled.div`
  width: 35rem;
  height: 5.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
  border-bottom: 1px solid #2a2f32;

  & > p {
    cursor: pointer;
  }
`;

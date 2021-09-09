import React, { useContext } from "react";
import {
  UsersListWrapper,
  UsersHeader,
  ProfilePicture,
  SignOutButton,
  LeftContainer,
  SearchInput,
  SearchIcon,
  SearchArea,
  ConversationsContainer,
  Conversation,
} from "./UsersList.styles";
import firebase from "firebase/app";
import { ChatContext } from "../../../GlobalContext/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const UsersList = (props) => {
  const { states, setters } = useContext(ChatContext);

  const onClickUser = (user) => {
    setters.setSelectedUser(user);
  };

  const onClickLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("funfou");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UsersListWrapper>
      <UsersHeader>
        <LeftContainer>
          <ProfilePicture
            src={
              "https://image.shutterstock.com/image-photo/headshot-portrait-smiling-millennial-male-600w-1667439913.jpg"
            }
            alt="temporary"
          />
          <p>
            {`Bem vindo, ${
              states.currentUser?.ac.displayName || states.currentUserData?.name
            }!`}
          </p>
        </LeftContainer>
        <SignOutButton onClick={onClickLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </SignOutButton>
      </UsersHeader>
      <SearchArea>
        <SearchIcon icon={faSearch} />
        <SearchInput type="text" placeholder="Search or start a new chat" />
      </SearchArea>
      <ConversationsContainer>
        {states.users
          ?.filter((user) => {
            return user?.id !== states.currentUser?.uid;
          })
          .map((user, index) => {
            return (
              <Conversation onClick={() => onClickUser(user)} key={index}>
                <ProfilePicture
                  src={
                    "https://image.shutterstock.com/image-photo/headshot-portrait-smiling-millennial-male-600w-1667439913.jpg"
                  }
                />
                <p>{user.name}</p>
              </Conversation>
            );
          })}
      </ConversationsContainer>
    </UsersListWrapper>
  );
};

export default UsersList;

import React, { useContext } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
  SignOutText,
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
        // console.log("funfou");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UsersListWrapper>
      <UsersHeader>
        <LeftContainer>
          {states.currentUser?.photoURL ? (
            <ProfilePicture
              src={states.currentUser?.photoURL}
              alt="user profile pic"
            />
          ) : (
            <FontAwesomeIcon icon={faUser} />
          )}

          <p>
            {`Bem vindo, ${
              states.currentUser?.ac.displayName || states.currentUserData?.name
            }!`}
          </p>
        </LeftContainer>
        <SignOutText onClick={onClickLogout}>
          Logout
          <SignOutButton>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </SignOutButton>
        </SignOutText>
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
                {user.photoURL ? (
                  <ProfilePicture src={user.photoURL} alt="user photo" />
                ) : (
                  <FontAwesomeIcon icon={faUser} />
                )}
                <p>{user.name}</p>
              </Conversation>
            );
          })}
      </ConversationsContainer>
    </UsersListWrapper>
  );
};

export default UsersList;

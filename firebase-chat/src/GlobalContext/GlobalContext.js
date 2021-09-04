import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
export const ChatContext = createContext();

export const GlobalState = (props) => {
  const [messages, setMessages] = useState([]); //finished
  const [newMessage, setNewMessage] = useState(""); //finished
  const [selectedUser, setSelectedUser] = useState();
  const [currentUserData, setCurrentUserData] = useState();
  const [users, setUsers] = useState();
  console.log("SELECTED USER:", selectedUser);
  console.log("CURRENT USER DATA:", selectedUser);
  console.log("USERS:", selectedUser);
  const history = useHistory();

  const mountChatIdFromUSerIds = (id1, id2) => {
    if (id1 > id2) {
      return `${id1}-${id2}`;
    } else {
      return `${id2}-${id1}`;
    }
  };

  //   useEffect(() => {
  //     const getMessages = async () => {
  //       let chatId = mountChatIdFromUSerIds(
  //         props.currentUserId,
  //         props.selectedUser.id
  //       );

  //       const ref = firebase
  //         .firestore()
  //         .collection("chats")
  //         .doc(chatId)
  //         .collection("messages")
  //         .orderBy("sentAt", "desc");

  //       ref.onSnapshot((querySnapshot) => {
  //         const messagesList = querySnapshot.docs.map((doc) => {
  //           return doc.data();
  //         });
  //         setMessages(messagesList);
  //       });
  //     };

  //     getMessages();
  //   }, [props.currentUserId, props.selectedUser.id]);

  //   useEffect(() => {
  //     firebase
  //       .firestore()
  //       .collection("users")
  //       .doc(props.currentUser?.uid)
  //       .get()
  //       .then((doc) => {
  //         setCurrentUserData(doc.data());
  //       });
  //   }, [props.currentUser?.uid]);

  //   useEffect(() => {
  //     if (!props.currentUser) {
  //       history.push("/login");
  //     }
  //   }, [props.currentUser]);

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const querySnapshot = await firebase
  //         .firestore()
  //         .collection("users")
  //         .get();

  //       const usersList = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data(),
  //         };
  //       });
  //       setUsers(usersList);
  //     };

  //     getUsers();
  //   }, []);

  const states = { messages, newMessage, selectedUser, currentUserData, users };
  const setters = {
    setMessages,
    setNewMessage,
    setSelectedUser,
    setCurrentUserData,
    setUsers,
  };
  const functions = { mountChatIdFromUSerIds };
  // const requests = { getMessages, sendMessage, getCurrentUserData, getUsers };

  const data = { states, setters, functions };

  return (
    <ChatContext.Provider value={data}>{props.children}</ChatContext.Provider>
  );
};

export default GlobalState;

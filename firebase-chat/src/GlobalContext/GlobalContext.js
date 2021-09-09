import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import firebase from "firebase";

export const ChatContext = createContext();

export const GlobalState = (props) => {
  const [messages, setMessages] = useState([]); //finished
  const [newMessage, setNewMessage] = useState(""); //finished
  const [selectedUser, setSelectedUser] = useState(); //finished
  const [currentUserData, setCurrentUserData] = useState();
  const [users, setUsers] = useState(); //finished
  const [currentUser, setCurrentUser] = useState(); //finished

  const mountChatIdFromUSerIds = (id1, id2) => {
    if (id1 > id2) {
      return `${id1}-${id2}`;
    } else {
      return `${id2}-${id1}`;
    }
  };

  useEffect(() => {
    const getMessages = async () => {
      let chatId = mountChatIdFromUSerIds(currentUser?.uid, selectedUser?.id);

      const ref = firebase
        .firestore()
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("sentAt", "desc");

      ref.onSnapshot((querySnapshot) => {
        const messagesList = querySnapshot.docs.map((doc) => {
          return doc.data();
        });
        setMessages(messagesList);
      });
    };

    getMessages();
  }, [currentUser?.uid, selectedUser?.id]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(currentUser?.uid)
      .get()
      .then((doc) => {
        setCurrentUserData(doc.data());
      });
  }, [currentUser?.uid]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await firebase
        .firestore()
        .collection("users")
        .get();

      const usersList = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setUsers(usersList);
    };

    getUsers();
  }, []);

  // useEffect(() => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(currentUser?.email, 123456)
  //     .then((credential) => {
  //       console.log(credential);
  //       return firebase
  //         .firestore()
  //         .collection("users")
  //         .doc(credential.user.uid)
  //         .set({
  //           name: currentUser?.displayName,
  //         });
  //     })
  //     .catch(function (error) {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // }, [currentUser, currentUserData]);

  const states = {
    messages,
    newMessage,
    selectedUser,
    currentUserData,
    users,
    currentUser,
  };
  const setters = {
    setMessages,
    setNewMessage,
    setSelectedUser,
    setCurrentUserData,
    setUsers,
    setCurrentUser,
  };
  const functions = { mountChatIdFromUSerIds };

  const data = { states, setters, functions };

  return (
    <ChatContext.Provider value={data}>{props.children}</ChatContext.Provider>
  );
};

export default GlobalState;

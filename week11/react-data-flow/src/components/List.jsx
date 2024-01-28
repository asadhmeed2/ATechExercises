import React from "react";
import { Contact } from "./Contact";

export const List = ({ contacts, onConversationClicked }) => {
  return (
    <>
      {contacts.map((contact) => (
        <Contact
          contact={contact}
          onConversationClicked={onConversationClicked}
        />
      ))}
    </>
  );
};

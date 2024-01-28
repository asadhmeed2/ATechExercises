import React from "react";

export const Contact = ({ contact, onConversationClicked }) => {
  const handleClick = () => {
    onConversationClicked(contact);
  };

  return <div onClick={handleClick}>{contact}</div>;
};

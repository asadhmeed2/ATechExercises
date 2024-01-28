import React from "react";

export const Line = ({ conv, sender }) => {
  const currentSender = conv.sender === "other" ? sender : "Me";

  return (
    <div>
      <span className="sender">{currentSender}</span>: <span>{conv.text}</span>
    </div>
  );
};

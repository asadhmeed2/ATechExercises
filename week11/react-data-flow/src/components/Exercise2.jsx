import React from "react";
import { List } from "./List";
import { Conversation } from "./Conversation";
import { useState } from "react";

const data = {
  conversations: [
    {
      with: "Laura",
      convo: [
        { text: "Hi", sender: "self" },
        { text: "You there?", sender: "self" },
        { text: "Yeah, hi, what's up?", sender: "other" },
      ],
    },
    {
      with: "Dad",
      convo: [
        { text: "Have you finished your school work yet?", sender: "other" },
        { text: "Yes.", sender: "self" },
        { text: "What do you mean, yes?", sender: "other" },
        { text: "??", sender: "self" },
      ],
    },
    {
      with: "Shoobert",
      convo: [
        { text: "Shoobert!!!", sender: "self" },
        { text: "Dude!!!!!!!!", sender: "other" },
        { text: "Shooooooooo BERT!", sender: "self" },
        { text: "You're my best friend", sender: "other" },
        { text: "No, *you're* my best friend", sender: "self" },
      ],
    },
  ],
};

export const Exercise2 = () => {
  const contacts = data.conversations.map((contact) => contact.with);

  const [displayConversation, setDisplayConversation] = useState(null);

  const displayConvo = (name) => {
    setDisplayConversation(name);
  };

  const convo = data.conversations.find(
    (conv) => conv.with === displayConversation
  );

  const onBack = () => {
    setDisplayConversation(null);
  };

  return (
    <div>
      {!!displayConversation && (
        <Conversation convo={convo.convo} sender={convo.with} onBack={onBack} />
      )}

      {!displayConversation && (
        <List contacts={contacts} onConversationClicked={displayConvo} />
      )}
    </div>
  );
};

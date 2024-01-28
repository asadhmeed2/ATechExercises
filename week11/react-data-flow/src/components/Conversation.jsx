import React from "react";
import { Line } from "./Line";

export const Conversation = ({ convo, sender, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>back</button>

      {convo.map((conv, i) => (
        <Line conv={conv} sender={sender} />
      ))}
    </div>
  );
};

import React from "react";

export const Item = ({ item, shouldDiscount }) => {
  const { price, item: text, discount } = item;

  return (
    <div>
      <span>{text}: </span>
      <span>${shouldDiscount ? price * (1 - discount) : price}</span>
    </div>
  );
};

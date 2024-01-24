import React from "react";
import { Item } from "./Item";

export const Home = ({ store, shouldDiscount }) => {
  return (
    <div>
      <h2>store</h2>
      {store.map((item) => (
        <Item item={item} shouldDiscount={shouldDiscount} />
      ))}
    </div>
  );
};

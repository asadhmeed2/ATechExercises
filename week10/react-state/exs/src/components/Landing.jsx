import React from "react";

export const Landing = ({ user, store }) => {
  const hottest = store.find((item) => item.hottest);

  return (
    <div>
      Welcome, {user}, The hottest item is {hottest.item} for ${hottest.price}
    </div>
  );
};

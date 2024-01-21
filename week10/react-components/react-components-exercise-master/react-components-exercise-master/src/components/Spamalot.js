import Spam from "./Spam";
import React, { Component, Fragment } from "react";

const Spamalot = () => {
  return (
    <Fragment>
      {Array.apply(null, Array(500)).map((_) => (
        <Spam />
      ))}
    </Fragment>
  );
};

export default Spamalot;

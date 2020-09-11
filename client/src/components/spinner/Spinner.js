import React from "react";
import spinner from "./Spinner.gif";

const Spinner = () => (
  <img
    style={{
      width: "200px",
      margin: "3rem auto",
      display: "block",
    }}
    src={spinner}
    alt=''
  />
);

export default Spinner;

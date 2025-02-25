import React from "react";

const Button = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <button>Opening</button>
    </a>
  );
};

export default Button;

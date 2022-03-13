import React from "react";
import "./protfolio.scss";
export default function protfoliolist({ title, active, setselected, id }) {
  return (
    <li
      className={active ? "Protfoliolist Active" : "Protfoliolist"}
      onClick={() => {
        setselected(id);
      }}
    >
      {title}
    </li>
  );
}

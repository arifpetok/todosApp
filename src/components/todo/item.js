import React from "react";

const Item = ({ todo, index, deleteTodo }) => (
  <li>
    <input defaultValue={todo} readOnly />
    <button className="remove" onClick={() => deleteTodo(todo)}>
      X
    </button>
  </li>
);

export default Item;

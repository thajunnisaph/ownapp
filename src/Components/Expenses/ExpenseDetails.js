import React, { useState } from "react";
import "./ExpenseItem.css";
const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const clickHandlerprice = () => {
    setAmount("100$");
  };
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Edit Title</button>
      <button onClick={clickHandlerprice}>Change Expense</button>
    </div>
  );
};
export default ExpenseDetails;

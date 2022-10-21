import React from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
const clickHandler = () => {
console.log('clicked');
}
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} title={props.title} />
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
};
export default ExpenseItem;

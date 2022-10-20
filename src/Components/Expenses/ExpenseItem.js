import React from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // return React.createElement(
  //   "div",
  //   { className: "expense-item" },
  //   React.createElement(ExpenseDate, { date: props.date }),
  //   React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, "Expense 1"),
  //     React.createElement("h1", {}, "Expense 1")
  //   )
  // );
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} title={props.title} />
    </Card>
  );
};
export default ExpenseItem;

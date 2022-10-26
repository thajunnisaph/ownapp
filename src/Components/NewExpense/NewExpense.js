import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredexpensedata) => {
    const expensedata = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensedata);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onsubmitexpensedata={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;

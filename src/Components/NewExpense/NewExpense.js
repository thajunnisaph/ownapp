import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [formStatus, setFormStatus] = useState(false);
  const formHandler = () => {
    setFormStatus(true);
  };
  const cancelclickHandler = () =>{
    setFormStatus(false);
  }
  const saveExpenseDataHandler = (enteredexpensedata) => {
    const expensedata = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensedata);
    setFormStatus(false);
  };
  return (
    <div className="new-expense">
      {!formStatus && <button onClick={formHandler}>Add New Expense</button>}
      {formStatus && (
        <ExpenseForm onsubmitexpensedata={saveExpenseDataHandler} 
        onCancel={cancelclickHandler}/>
      )}
    </div>
  );
};
export default NewExpense;

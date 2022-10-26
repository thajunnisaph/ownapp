import React, { useState } from 'react';
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";
const initialdata = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 21),
     
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      
    },
  ];

const App = () => {
  const [expenses,setExpenses] =useState(initialdata);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) =>{
     return [expense,...prevExpense];
    })
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((expenses) => {
        return (
          <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
           // location={expenses.locationofexpenditure}
          ></ExpenseItem>
        );
      })}
      
    </div>
  );
};

export default App;

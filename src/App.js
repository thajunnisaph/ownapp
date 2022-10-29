import React, { useState } from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpensesFilter from "./Components/NewExpense/ExpensesFilter";
import ExpensesChart from "./Components/Expenses/ExpensesChart";
import Card from "./Components/UI/Card";
import "./Components/Expenses/Expenses.css";
import "./Components/NewExpense/ExpenseList.css";
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

const App = (props) => {
  const [expenses, setExpenses] = useState(initialdata);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
    console.log(expense);
  };
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };
  const expensefiltered = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={expensefiltered}/>
        <ul className="expenses-list">
          {expensefiltered.length === 0 && (
            <p className="expenses-list__fallback">no expenses to show</p>
          )}

          {expensefiltered.length > 0 &&
            expensefiltered.map((expenses) => {
              return (
                <ExpenseItem
                  key={expenses.id}
                  title={expenses.title}
                  amount={expenses.amount}
                  date={expenses.date}
                ></ExpenseItem>
              );
            })}
          {expensefiltered.length === 1 && (
            <p className="expenses-list__fallback">
              Only single Expense here. Please add more...
            </p>
          )}
        </ul>
      </Card>
    </div>
  );
};

export default App;

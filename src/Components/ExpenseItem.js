import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate=new Date(2022, 7, 23);
  const locationofExpenditure='kerala';
  const expenseTitle='Car Insurance';
  const expenseAmount=127.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>{locationofExpenditure}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

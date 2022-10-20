import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
 
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails
       amount={props.amount}
       title={props.title} />
    </div>
  );
}
export default ExpenseItem;

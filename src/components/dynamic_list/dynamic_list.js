// mostly use build-in Array methos map()
// map()
// map ek naya Array create karta hi. jo ki dusare Array pe based hota hai. jo ki purane Array ke sabhi Element ko cheack karke new Array create karta hai.

//Example:-
import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../ui/Card';
function Expenses(props) {
  const [filtredYear, setFiltredYear] = useState();
  const filterChangehandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
}
export default Expenses;

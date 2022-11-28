Note:- jub bhi hum JSX mai condistion likhate hai to {} ka use karte hai.
Example:-

import React, {  } from 'react';

const Expenses = (props) => {
  // console.log(props.items);
  /*-----------Simple javascript condistion related vanila javascript pattren point------*/
  let expensesContent = <p>No expenses Found </p>;
  if(filteredExpenses.length > 0){
    expensesContent =  filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  
  return (
    <div>
        {} //Condistion code will come here between curly-Brackets
        /*---------Using vanila javascript pattren*/ 
        {expensesContent}
        /*-------------------//simple condistion--------------*/
        {filteredExpenses.length === 0 && <p>No expenses Found </p>}
        { filteredExpenses.length >= 0 && filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        /*----------------//ternary operator Condistion------------*/
        {filteredExpenses.length === 0 ? (
          <p>No expenses Found </p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
    </div>
  );
};
export default Expenses;
Note:- jub bhi hum JSX mai condistion likhate hai to {} ka use karte hai.
Example:-

import React, {  } from 'react';

const Expenses = (props) => {
  // console.log(props.items);
  
  return (
    <div>
        {} //Condistion code will come here between curly-Brackets 
        
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
        )}//ternary operator Condistion
    </div>
  );
};
export default Expenses;
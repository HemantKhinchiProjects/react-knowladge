
//This is supper importent pattren to communicate between components. jis tarha se react main hum data props ki help se parent to child bhejate hai. usi ko reverse use karke hum apna deta child to parent bhi bhej sakte hai. par iske liye hum bhich mai jitane bhi component honge unko skeep nahi kar sakte. un sabhi component ko use karke hi hum deta lift kar sakte hai. props mai kewal component to component hi deta bhej sakte hai. kisi bhi component ko skeep nahi kar sakte.
//Example:
/*----------componet B se data ko component a mai bhej rahe hai.
/*----------componet A se data ko component a mai Access kar rahe hai rahe hai.
//-----------------------------Component A (First Stap)----------------------------------*/

import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = () => {
  const SaveExpenseDataHandler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} /> /*------ */
    </div>
  );
};
export default NewExpense;

//------------------------Component B (Second Stap)-----------------------------------*/

import React, { useState } from 'react';
const ExpenseForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    //for all input blank
    SetenterdTitle('');
    SetenterdAmount('');
    SetenterdDate('');

    props.onSaveExpenseData(expenseData); //Note: ynha se hum object ko onSaveExpenseData function ke sath parent componet ko bhej rahe hai.
  };
  return (
    <form onSubmit={submitHandler}>
      </form>
  );
};
export default ExpenseForm;


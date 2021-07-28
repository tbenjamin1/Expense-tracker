import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expanseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      
    };
    props.onSaveExpenseData(expanseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
   
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" 
            value={enteredTitle}
            onChange={titleChangeHandler} required />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
              required

            />
          </div>
        </div>
        <div className="new-expense__actions">

          <button type="button" onClick={props.onCancel}  className="new-expense__tbn">Cancel</button>   
          <button type="submit" className="new-expense__btnn">Add Expense</button>
        </div>
      </form>

    </div>
  );
};

export default ExpenseForm;

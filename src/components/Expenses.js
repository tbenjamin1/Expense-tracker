import React, { useState } from "react";

import ExpensesFilter from "./Filter/ExpensesFilter";
import Card from "./Card";
import ExpenseList from "./espenselist/ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (props) => {
  const [Filter, setFilter] = useState('2020');
 
  const onSelectYear = (selectedYear) => {
    setFilter(selectedYear);
  };
  const filterExpenses=props.item.filter(expense=>{
  return expense.date.getFullYear().toString() === Filter;
  });


  return (
    <Card className="expenses">
      <h2>Let's Get Started!</h2>
      <ExpensesFilter select={Filter} filterYear={onSelectYear}
      />
      <ExpensesChart expenses={filterExpenses} />
   <ExpenseList items={filterExpenses} />
      
    </Card>
  );
};

export default Expenses;

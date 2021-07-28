import React from 'react';

import'./ExpensesFilter.css';

const ExpensesFilter = (props) => {
    


    const changeSelectedOption =(event)=>{
        props.filterYear(event.target.value);
    };
   
    
   
    return (
        <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.select} onChange={changeSelectedOption} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='1970'>1970</option>
        </select>
      </div>
    </div>
    );
};

export default ExpensesFilter

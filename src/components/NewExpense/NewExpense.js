import React ,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
      const [display,setDisplay]=useState(false); 

    const saveExpanseHandler =(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()

        };
       
   props.onAddExpenseData(expenseData)
    };
      const startEditingHandler =()=>{
        setDisplay(true);
      };
      const stopDisplay =()=>{
        setDisplay(false);
      };
      
    return (
        <div className="new-expense" >
           {!display && <button onClick={ startEditingHandler} >Add New Expense</button>}
           {display &&  <ExpenseForm onSaveExpenseData= {saveExpanseHandler} onCancel={stopDisplay}/>
    }            
        </div>
    )
};

export default NewExpense

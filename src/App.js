 import React,{useState} from 'react';
import Expenses from './components/Expenses';
import './App.css';  
import NewExpense from './components/NewExpense/NewExpense';



  const DUMMY_EXPENSES= [
    {
      id:'e1',
      title:'toilet paper',
      amount:678.900,
      date: new Date(2021/7/21),
    },
    {
      id:'e2',
      title:'ttttt paper',
      amount:678.900,
      date: new Date(2021/7/21),
    },
    {
      id:'e3',
      title:'car paper',
      amount:678.900,
      date: new Date(2021/7/21),
    },
    {
      id:'e4',
      title:'paper',
      amount:678.900,
      date: new Date(2021/7/21),
    },
  ];
  const App=()=> {
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

const addExpenseHandler =(expense)=>{
//  setExpenses([expense,...expenses]);
setExpenses(prevExpenses => {
  return[expense,...prevExpenses];
});
 
  console.log(expenses);
};

  return (
    <div className="App">
    < NewExpense  onAddExpenseData= {addExpenseHandler}/>
     < Expenses  item={expenses}/>
       
            
        
      
    </div>
  );
}

export default App;

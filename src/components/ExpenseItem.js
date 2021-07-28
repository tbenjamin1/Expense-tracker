import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from './Card'
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
 const [title,setTitle] = useState(props.title);


//  const edit = () => {
//    setTitle('updated');
//  };

  return (
 
    <Card className="expense-tem">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title} </h2>
      </div>
      <div className="expense-item__price">
        {props.amount}$
      </div>
     
    </Card>
  );
};
export default ExpenseItem;

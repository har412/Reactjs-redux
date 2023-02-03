import React from 'react';
import { useState } from "react"
import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  // const [State,SetState] = useState({ title: '', amount: '' });

const [Title,setEnteredTitle] = useState("");
const [Amount,setEnteredAmount] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={Title.title} onChange={event =>{  const newTitle=event.target.value; setEnteredTitle(prevInputState => ({ title: newTitle, amount: prevInputState.amount }))}} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={Amount.amount} onChange={event => { const newAmount=event.target.value;setEnteredAmount({ amount:newAmount, title: Amount.title })}} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;

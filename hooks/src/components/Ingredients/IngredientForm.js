import React from 'react';
import { useState } from "react"
import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  const [State,SetState] = useState({ title: '', amount: '' });
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
            <input type="text" id="title" value={State.title} onChange={event =>{  const newTitle=event.target.value; SetState(prevInputState => ({ title: newTitle, amount: prevInputState.amount }))}} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={State.amount} onChange={event => { const newAmount=event.target.value;SetState({ amount:newAmount, title: State.title })}} />
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

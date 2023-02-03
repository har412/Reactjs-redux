import React, { useEffect }  from 'react';
import { useState } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [enteredFilter,setEnteredFilter]=useState('');

  const {onloadIngredients}=props;
  useEffect(()=>{
    const query = enteredFilter.length === 0?'':`?orderBy="title"&equalTo="${enteredFilter}"`;

    fetch('https://react-redux-311f1-default-rtdb.firebaseio.com/ingredients.json'+query).then(response=>response.json()).then((data=>{
      const loaddedIngredient = [];
      for (const key in data){
        loaddedIngredient.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
      })}
      console.log(loaddedIngredient)
      props.onloadIngredients(loaddedIngredient)
    }))
  },[enteredFilter,onloadIngredients] )
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;

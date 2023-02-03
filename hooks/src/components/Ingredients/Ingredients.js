import React, {useEffect, useState , useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [ingredients,setIngredients]=useState ([]);


 
  const filterIngredientHandler = useCallback( filterIngredients =>{
    setIngredients(filterIngredients)
  },[])
  const addIngredientHandler = ingredient =>{
   console.log(ingredient)

    fetch('https://react-redux-311f1-default-rtdb.firebaseio.com/ingredients.json',{
      method:'POST',
      body: JSON.stringify(ingredient),
      headers:{'Content-type':'application/json'}
    }).then(response => {
      return response.json()
    }).then(responseData => {
      setIngredients(prevIngredients => [...prevIngredients,{id:responseData.name,...ingredient}])
    });
  }
  return (
    <div className="App">
      <IngredientForm addIngredientHandler={addIngredientHandler} />
      <section>
        <Search onloadIngredients={filterIngredientHandler}/>
        <IngredientList ingredients={ingredients} onRemoveItem={()=>{}}></IngredientList>
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;

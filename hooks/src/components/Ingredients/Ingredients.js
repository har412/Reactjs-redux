import React, {useReducer ,useEffect, useState , useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal'

const ingredientReducer = (currentIngredients,action)=>{
  switch(action.type){
    case 'set':
      return action.ingredient;
    case 'add':
      return [...currentIngredients,action.ingredient];
    case 'delete':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default: 
      throw new Error('Should not get here')
  }
}

function Ingredients() {
  const [ingredients,dispatch]= useReducer(ingredientReducer,[])
  // const [ingredients,setIngredients]=useState ([]);
  const [isLoading,setLoading]= useState(false)
const[Error,setError]=useState()

  const filterIngredientHandler = useCallback( filterIngredients =>{
    // setIngredients(filterIngredients)
    dispatch({type:'set',ingredient:filterIngredients})
  },[])
  const addIngredientHandler = ingredient =>{
   console.log(ingredient)
   setLoading(true)
    fetch('https://react-redux-311f1-default-rtdb.firebaseio.com/ingredients.json',{
      method:'POST',
      body: JSON.stringify(ingredient),
      headers:{'Content-type':'application/json'}
    }).then(response => {
      setLoading(false)
      return response.json()
    }).then(responseData => {
      // setIngredients(prevIngredients => [...prevIngredients,{id:responseData.name,...ingredient}])
      dispatch({type:"add",ingredient:{id:responseData.name,...ingredient}})
    }).catch((err)=>{
      return setError('You have a error!')
    });
  }
  const removeIngredientHandler = ingredientId => {
    setLoading(true)
    fetch(`https://react-redux-311f1-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,{
      method:'DELETE',
    }).then((response)=>{
      setLoading(false)
      // setIngredients(prevIngredients => prevIngredients.filter((ingredient)=>{ return ingredient.id !== ingredientId}))
      dispatch({type:'delete',id:ingredientId})
    }).catch((err)=>{
      return setError('You have a error!')
    })

  }
  const clearError=()=>{
    setError(null);
    setLoading(false)
  }
  return (
    <div className="App">
      {Error && <ErrorModal onClose={clearError}>{Error}</ErrorModal>}
      <IngredientForm addIngredientHandler={addIngredientHandler} loading={isLoading} />
      <section>
        <Search onloadIngredients={filterIngredientHandler}/>
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler}></IngredientList>
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;

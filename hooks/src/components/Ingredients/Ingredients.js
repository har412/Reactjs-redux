import React, {useEffect, useState , useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal'
function Ingredients() {
  const [ingredients,setIngredients]=useState ([]);
  const [isLoading,setLoading]= useState(false)
const[Error,setError]=useState()
 
  const filterIngredientHandler = useCallback( filterIngredients =>{
    setIngredients(filterIngredients)
  },[])
  const addIngredientHandler = ingredient =>{
   console.log(ingredient)
   setLoading(true)
    fetch('https://react-redux-311fedients.json',{
      method:'POST',
      body: JSON.stringify(ingredient),
      headers:{'Content-type':'application/json'}
    }).then(response => {
      setLoading(false)
      return response.json()
    }).then(responseData => {
      setIngredients(prevIngredients => [...prevIngredients,{id:responseData.name,...ingredient}])
    }).catch((err)=>{
      return setError('You have a error!')
    });
  }
  const removeIngredientHandler = ingredientId => {
    setLoading(true)
    fetch(`https://react-redux-311f1-default-/ingredients/${ingredientId}.json`,{
      method:'DELETE',
    }).then((response)=>{
      setLoading(false)
      setIngredients(prevIngredients => prevIngredients.filter((ingredient)=>{ return ingredient.id !== ingredientId}))
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

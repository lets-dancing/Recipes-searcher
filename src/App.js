import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent'

function App() {
  const MY_ID = 'c499bb34';
  const MY_KEY = 'a8d18864f7b6b4c74a0f1ffdc23fb2c4';
  const startIngr = 'melon';

  const[mySearch, setMySearch] = useState("");
  const[myRecipes, setMyRecipes] = useState([]);
  const[wordSubmit, setWordSubmit] = useState(startIngr);
  

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits); 
    }
    getRecipe()
  }, [wordSubmit])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmit(mySearch)
  }

  return (
    <div className='App' style={{margin: 0, padding: 0}}>
      <div className="container">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>
      <div className='container'>
        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
      </div>
      <div className='content'>
      {myRecipes.map((element, index) => (
        <MyRecipesComponent 
        key={index} 
        label={element.recipe.label} 
        calories={element.recipe.calories} 
        image={element.recipe.image} 
        ingridients={element.recipe.ingredientLines}
        nutrients={element.recipe.totalNutrients}/>
      ))}
      </div>
    </div>
  );
}

export default App;

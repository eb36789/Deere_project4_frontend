import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import MealDetail from "./MealDetail.js";
import AllMeals from "./AllMeals.js";
import Home from "./Home.js";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      meals: [],
      ingredients: []
    }
  }

  componentDidMount() {
    axios.get(`${backendUrl}/meals`)
    // axios.get("http://localhost:3001/api/meals")
    .then((response) => {
      this.setState({
        meals: response.data.meals,
      })
    })
  }

  getAllMeals() {
    axios.get(`${backendUrl}/meals`)
    // axios.get("http://localhost:3001/api/meals")
    .then((response) => {
      this.setState({
        meals: response.data.meals,
      })
    })
  }

addMeal = (e) => {
  e.preventDefault();
  console.log(e.target.name.value);
  axios.post(`${backendUrl}/meals`, { name: e.target.name.value,}).then((response) => {
    let tempArray = this.state.meals
    response.data.meal.Ingredients=[]
    tempArray.push(response.data.meal);
    this.setState({
    meals: tempArray,
     // console.log(response.data.meal);
  })
  })
}

addIngredient = (e) => {
  e.preventDefault();
  let mealId = e.target.mealId.value;
  axios
    .post(`${backendUrl}/meals/${mealId}/newingredient`, {
      ingredient: e.target.ingredient.value,
      measurement: e.target.measurement.value,
      amount: e.target.amount.value
       })
    .then((response) => {
      this.getAllMeals()
    //   console.log(response)
    //   // get the correct meal from this.state.meals
    //   let updatedMeal = this.state.meals.find((meal) => {
    //     return meal.id === mealId;
    //   });
    //   // push the new ingredient to the ingredients array
    //   updatedMeal.Ingredients.push(response.data.ingredient);
    //   console.log(updatedMeal);
    //   const newMealArray = this.state.meals.map((meal) => {
    //     if (meal.id === updatedMeal.id) {
    //       return updatedMeal;
    //     } else {
    //       return meal;
    //     }
    //   });
    //   // setState for the updated ingredients
    //   this.setState({
    //     meals: newMealArray,
    //   });
    });
};

  render() {
    // console.log(this.state);
  return (
    <div className="App">
      <link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=The+Girl+Next+Door"></link>
      <header>Freeman Family Meals</header>
      <nav>
      <Link to="/">Home Page</Link>
      <br></br>
      <Link to="/all">Check out all the meals</Link>
      </nav>
      <main>

        <Switch>
  <Route exact path="/" component={() => <Home/>}/>
          <Route exact
          path="/all" 
          component={() => 
          <AllMeals 
          meals={this.state.meals} 
          addMeal={this.addMeal}/>} />
          <Route path="/meals/:id" component={(routerProps) => <MealDetail {...routerProps} meals={this.state.meals} addIngredient={this.addIngredient}/>} />
        </Switch>
      </main>
      </div>
  )
  }
}

export default App;

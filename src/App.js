import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import MealDetail from "./MealDetail.js";
import AllMeals from "./AllMeals.js";
import Home from "./Home.js";
import WeeklyPlanner from "./WeeklyPlanner.js";
import MultiweekPlanner from "./MultiweekPlanner.js";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";

console.log(backendUrl)
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      meals: [],
      ingredients: [],
      images: []
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

//THIS IS WIP
deleteMeal = async (e) => {
  e.prevent.preventDefault();
  //not sure if row below should read let mealId = e.target.mealId OR parseInt(e.target.id)
  let mealId = e.target.id;
  let arrayIndex = e.target.getAttribute("arrayindex");
  await axios.delete(`${backendUrl}/meals/${mealId}}`)

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
    });
};

//THIS IS WIP
deleteIngredient = (e) => {
  e.preventDefault();
  let ingredientId = e.target.ingredientId.value;
}

//THIS IS WIP
deleteIngredient = (e) => {
  e.preventDefault();}


  render() {
    // console.log(this.state);
  return (
    <div className="App">
      <link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=The+Girl+Next+Door"></link>
        <link rel="stylesheet"
  href="/all.css"></link>
     <link rel="stylesheet"
  href="/all.js"></link>
      <header>Freeman Family Meals</header>
      <nav>
      <Link to="/">Home Page</Link>
      <Link to="/all">Check out all the meals</Link>
      <Link to="/WeeklyPlanner">Weekly Planner</Link>
      <Link to="/MultiweekPlanner">Multi-Week Planner</Link>
      </nav>
      <main>

        <Switch>
  <Route exact path="/" component={() => <Home/>}/>
  <Route exact path="/WeeklyPlanner" component={() => <WeeklyPlanner/>}/>
  <Route exact path="/MultiweekPlanner" component={() => <MultiweekPlanner/>}/>
  <Route exact
          path="/all" 
          component={() => 
          <AllMeals 
          meals={this.state.meals} 
          addMeal={this.addMeal}/>}
          deleteMeal={this.deleteMeal} />
  <Route path="/meals/:id" component={(routerProps) => <MealDetail {...routerProps} meals={this.state.meals} addIngredient={this.addIngredient}/>}  deleteIngredient={this.deleteIngredient} editIngredient={this.editIngredient}/>
        </Switch>
      </main>
      <footer>
        designed with love <i class="fas fa-heart"></i> by Mom <i class="fas fa-heart"></i> for the Freeman Family <i class="far fa-copyright"></i>   2020
      </footer>
      </div>
  )
  }
}

export default App;

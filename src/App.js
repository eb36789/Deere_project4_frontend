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
          addMeal={this.addMeal}/>} />
          <Route path="/meals/:id" component={(routerProps) => <MealDetail {...routerProps} meals={this.state.meals} addIngredient={this.addIngredient}/>} />
        </Switch>
      </main>
      <footer>
        designed with love (heart) by Mom (heart) for the Freeman Family 2020
      </footer>
      </div>
  )
  }
}

export default App;

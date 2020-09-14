import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import MealDetail from "./MealDetail.js";
import AllMeals from "./AllMeals.js";
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
      {/* <iframe src="https://wheeldecide.com/e.php?c1=Tacos&c2=Cheesy+Potato+Soup&c3=Beef+Stroganoff&c4=Chili+Cheese+Dogs&c5=Spaghetti&c6=Cajun+Sausage+Alfredo&c7=Chicken+and+Dumplings&c8=Chicken+and+Noodles&c9=Enchiladas&c10=Fajitas&c11=Bratwurst&c12=Pancakes&c13=Breakfast+Burritos&c14=Omelettes&c15=Eggs+Benedict&c16=Chicken+Pot+Pie&c17=White+Chicken+Chili&c18=Grilled+Cheese+and+Tomato+Soup&c19=Fried+Chicken&c20=Pizza&c21=French+Bread+Pizza&c22=Chinese+Stir+Fry&c23=Pot+Roast&c23=Red+Beans+and+Rice&col=winter&t=Freeman+Family+Dinners&time=5" width="500" height="500" scrolling="no" frameborder="0"></iframe> */}
        <Switch>
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
